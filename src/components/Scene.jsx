/* eslint-disable react/prop-types */
import { useEffect, useRef, forwardRef } from 'react';
import * as THREE from 'three';
import { BRANCH } from '../data/familyData';

const REPEL = 14000, ATT = 0.009, DAMP = 0.80, IDEAL = 150;
const NODE_TEXTURE_SIZE = 512;
const NODE_CENTER_X = 256;
const NODE_CENTER_Y = 216;
const NODE_CENTER_ANCHOR_Y = 1 - (NODE_CENTER_Y / NODE_TEXTURE_SIZE);
const EDGE_NODE_PADDING = 4;

function getNodeCircleRadius(isSelected, isFocused) {
  return isFocused ? 128 : (isSelected ? 122 : 112);
}

function getNodeScale(isSelected, isFocused) {
  return isFocused ? 110 : (isSelected ? 105 : 95);
}

function getNodeWorldRadius(isSelected, isFocused) {
  return (getNodeScale(isSelected, isFocused) * getNodeCircleRadius(isSelected, isFocused)) / NODE_TEXTURE_SIZE;
}

function getDisplayPosition(person, mode) {
  const pos = person._p.clone();
  if (mode === '2d') pos.z = 0;
  return pos;
}

function getEdgePoints(personA, personB, selectedId, focusedId, mode) {
  const start = getDisplayPosition(personA, mode);
  const end = getDisplayPosition(personB, mode);
  const direction = end.clone().sub(start);
  const distance = direction.length();

  if (distance < 1e-6) {
    return [start, end];
  }

  direction.normalize();

  const startRadius = getNodeWorldRadius(personA.id === selectedId, personA.id === focusedId) + EDGE_NODE_PADDING;
  const endRadius = getNodeWorldRadius(personB.id === selectedId, personB.id === focusedId) + EDGE_NODE_PADDING;
  const maxInset = Math.max((distance / 2) - 1, 0);
  const startInset = Math.min(startRadius, maxInset);
  const endInset = Math.min(endRadius, maxInset);

  start.addScaledVector(direction, startInset);
  end.addScaledVector(direction, -endInset);
  return [start, end];
}

function makeNodeTex(p, isSelected, isFocused) {
  const C = document.createElement('canvas');
  C.width = NODE_TEXTURE_SIZE;
  C.height = NODE_TEXTURE_SIZE;
  const ctx = C.getContext('2d');
  const cx = NODE_CENTER_X;
  const cy = NODE_CENTER_Y;
  const r = getNodeCircleRadius(isSelected, isFocused);
  const col = BRANCH[p.branch]?.hex || '#888';

  if (isSelected || isFocused) {
    ctx.beginPath(); ctx.arc(cx, cy, r + 6, 0, Math.PI * 2);
    ctx.fillStyle = isFocused ? col + '55' : col + '33';
    ctx.fill();
  }

  // Card background — soft parchment
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = '#FDFBF8';
  ctx.fill();

  // Soft drop shadow (simulated with a wider semi-transparent ring)
  ctx.beginPath(); ctx.arc(cx, cy, r + 1, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(0,0,0,0.08)';
  ctx.lineWidth = 6;
  ctx.stroke();

  // Branch-colored border
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = col;
  ctx.lineWidth = isFocused ? 14 : (isSelected ? 12 : 10);
  ctx.stroke();

  // Initials
  ctx.font = `600 ${isFocused ? 60 : 52}px Inter, sans-serif`;
  ctx.fillStyle = col;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(p.firstName[0] + p.lastName[0], cx, cy);

  // Name labels — deep charcoal
  ctx.font = '600 34px Inter, sans-serif';
  ctx.fillStyle = '#2D2A26';
  ctx.fillText(p.firstName, cx, cy + r + 46);
  ctx.font = '500 28px Inter, sans-serif';
  ctx.fillStyle = '#5E5850';
  ctx.fillText(p.lastName, cx, cy + r + 84);

  if (p.birth) {
    ctx.font = '400 24px Inter, sans-serif';
    ctx.fillStyle = '#9A948E';
    const yr = p.birth + (p.death ? `–${p.death}` : '');
    ctx.fillText(yr, cx, cy + r + 120);
  }
  return C;
}

function makeSprite(p, isSelected, isFocused) {
  const tex = new THREE.CanvasTexture(makeNodeTex(p, isSelected, isFocused));
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
  const sp = new THREE.Sprite(mat);
  const scale = getNodeScale(isSelected, isFocused);
  sp.scale.set(scale, scale, 1);
  sp.center.set(0.5, NODE_CENTER_ANCHOR_Y);
  sp.userData.pid = p.id;
  return sp;
}

function makeEdgeMat(rel) {
  if (rel.type === 'marriage')
    return new THREE.LineDashedMaterial({ color: 0x8A7350, dashSize: 6, gapSize: 4, transparent: true, opacity: 0.45 });
  return new THREE.LineBasicMaterial({ color: 0xC4B9A5, transparent: true, opacity: 0.4 });
}

const Scene = forwardRef(function Scene({
  people, rels, selectedId, focusedId, pathMode, graphMode,
  onNodeClick, onPathSelect, tooltipRef
}, fwdRef) {
  const mountRef = useRef(null);
  const internals = useRef(null);

  // Initialize Three.js scene — runs once
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF5F1EB);
    scene.fog = new THREE.Fog(0xF5F1EB, 800, 1600);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    renderer.shadowMap.enabled = false;
    const mountNode = mountRef.current;
    mountNode.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 3000);
    camera.position.set(0, 0, 620);

    scene.add(new THREE.AmbientLight(0xffffff, 1.0));
    const dl = new THREE.DirectionalLight(0xfff8f0, 0.4);
    dl.position.set(100, 200, 200);
    scene.add(dl);

    const nodeMap = {};
    const edgeArr = [];
    const ray = new THREE.Raycaster();
    const mo = new THREE.Vector2();

    let drag = false, lx = 0, ly = 0, th = 0, ph = Math.PI / 2, cr = 620;
    let activePointerId = null;
    let pointerMoved = false;
    const activePointers = new Map();
    let pinchStartDistance = null;
    let pinchStartRadius = null;
    const ct = new THREE.Vector3();
    let simOn = true;
    let hovId = null;

    function updCam() {
      const mode = internals.current?.graphMode || '2d';
      if (mode === '2d') {
        camera.position.set(ct.x, ct.y, Math.max(cr, 180));
        camera.lookAt(ct.x, ct.y, 0);
        return;
      }
      camera.position.x = ct.x + cr * Math.sin(ph) * Math.sin(th);
      camera.position.y = ct.y + cr * Math.cos(ph);
      camera.position.z = ct.z + cr * Math.sin(ph) * Math.cos(th);
      camera.lookAt(ct);
    }

    function updatePointerPosition(clientX, clientY) {
      mo.x = (clientX / innerWidth) * 2 - 1;
      mo.y = -(clientY / innerHeight) * 2 + 1;
    }

    function pickNode(clientX, clientY) {
      updatePointerPosition(clientX, clientY);
      ray.setFromCamera(mo, camera);
      const hits = ray.intersectObjects(Object.values(nodeMap).map(n => n.sp), false);
      return hits[0]?.object?.userData?.pid || null;
    }

    function getPinchDistance() {
      const [first, second] = [...activePointers.values()];
      if (!first || !second) return null;
      return Math.hypot(second.x - first.x, second.y - first.y);
    }

    function handlePointerDown(e) {
      activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      pointerMoved = false;
      renderer.domElement.setPointerCapture?.(e.pointerId);

      if (activePointers.size === 1) {
        activePointerId = e.pointerId;
        drag = true;
        lx = e.clientX;
        ly = e.clientY;
        return;
      }

      if (activePointers.size === 2) {
        pinchStartDistance = getPinchDistance();
        pinchStartRadius = cr;
        activePointerId = null;
        drag = false;
        pointerMoved = true;
      }
    }

    function handlePointerMove(e) {
      if (activePointers.has(e.pointerId)) {
        activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      }

      if (activePointers.size >= 2 && pinchStartDistance && pinchStartRadius) {
        const nextDistance = getPinchDistance();
        if (nextDistance) {
          cr = THREE.MathUtils.clamp((pinchStartRadius * pinchStartDistance) / nextDistance, 120, 1800);
          updCam();
        }
        return;
      }

      if (!drag || (activePointerId !== null && e.pointerId !== activePointerId)) return;
      const deltaX = e.clientX - lx;
      const deltaY = e.clientY - ly;
      if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) pointerMoved = true;
      const mode = internals.current?.graphMode || '2d';
      if (mode === '2d') {
        const panFactor = cr / 620;
        ct.x -= deltaX * panFactor;
        ct.y += deltaY * panFactor;
        lx = e.clientX;
        ly = e.clientY;
        updCam();
        return;
      }
      th -= deltaX * .005;
      ph = Math.max(.08, Math.min(Math.PI - .08, ph + deltaY * .005));
      lx = e.clientX; ly = e.clientY; updCam();
    }

    function handlePointerUp(e) {
      const wasActivePointer = activePointerId === e.pointerId;
      activePointers.delete(e.pointerId);
      renderer.domElement.releasePointerCapture?.(e.pointerId);

      if (activePointers.size < 2) {
        pinchStartDistance = null;
        pinchStartRadius = null;
      }

      if (!wasActivePointer) {
        if (activePointers.size === 0) {
          drag = false;
          activePointerId = null;
        }
        return;
      }

      drag = false;
      activePointerId = null;

      if (!pointerMoved) {
        const id = pickNode(e.clientX, e.clientY);
        if (!id) return;
        const st = internals.current;
        if (st?.pathMode) st.onPathSelect?.(id);
        else st?.onNodeClick?.(id);
      }
    }

    function handleWheel(e) {
      cr = Math.max(120, Math.min(1800, cr + e.deltaY * .5)); updCam();
    }

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    renderer.domElement.addEventListener('wheel', handleWheel, { passive: true });

    renderer.domElement.style.cursor = 'grab';
    renderer.domElement.style.touchAction = 'none';

    // Hover tooltip
    function handleHover(e) {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      if (drag) return;
      updatePointerPosition(e.clientX, e.clientY);
      ray.setFromCamera(mo, camera);
      const hits = ray.intersectObjects(Object.values(nodeMap).map(n => n.sp), false);
      const tip = tooltipRef.current;
      if (!tip) return;
      if (hits.length) {
        const id = hits[0].object.userData.pid;
        if (id !== hovId) {
          hovId = id;
          const ppl = internals.current?.people;
          const p = ppl?.find(x => x.id === id);
          if (p) tip.textContent = p.firstName + ' ' + p.lastName + (p.birth ? ` · ${p.birth}${p.death ? '–' + p.death : ''}` : '');
        }
        tip.classList.add('show');
        tip.style.left = (e.clientX + 14) + 'px';
        tip.style.top = (e.clientY - 8) + 'px';
        renderer.domElement.style.cursor = 'pointer';
      } else {
        hovId = null;
        tip.classList.remove('show');
        renderer.domElement.style.cursor = drag ? 'grabbing' : 'grab';
      }
    }
    renderer.domElement.addEventListener('pointermove', handleHover);

    // Force sim step
    function stepForce() {
      if (!simOn) return;
      const ppl = internals.current?.people;
      const rls = internals.current?.rels;
      const fid = internals.current?.focusedId;
      if (!ppl || !rls) return;

      ppl.forEach((a, i) => {
        const mode = internals.current?.graphMode || '2d';
        if (a.id === fid) {
          a._p.set(0, 0, mode === '2d' ? 0 : a._p.z);
          a._v.set(0, 0, 0);
          return;
        }
        const f = new THREE.Vector3();
        ppl.forEach((b, j) => {
          if (i === j) return;
          const d = new THREE.Vector3().subVectors(a._p, b._p);
          if (mode === '2d') d.z = 0;
          const dist2 = Math.max(d.lengthSq(), 900);
          d.normalize().multiplyScalar(REPEL / dist2);
          f.add(d);
        });
        if (mode === '2d') f.z = 0;
        f.add(a._p.clone().multiplyScalar(-0.0015));
        a._v.add(f);
        a._v.multiplyScalar(DAMP);
        a._p.add(a._v);
        if (mode === '2d') {
          a._v.z = 0;
          a._p.z = THREE.MathUtils.lerp(a._p.z, 0, 0.35);
        }
      });

      rls.forEach(rel => {
        const pa = ppl.find(x => x.id === rel.a);
        const pb = ppl.find(x => x.id === rel.b);
        if (!pa || !pb) return;
        const d = new THREE.Vector3().subVectors(pb._p, pa._p);
        if ((internals.current?.graphMode || '2d') === '2d') d.z = 0;
        const stretch = (d.length() - IDEAL) * ATT;
        d.normalize().multiplyScalar(stretch);
        if (pa.id !== fid) pa._v.add(d);
        if (pb.id !== fid) pb._v.sub(d);
      });
    }

    // Update edges
    function updEdges() {
      const ppl = internals.current?.people;
      const mode = internals.current?.graphMode || '2d';
      const currentSelectedId = internals.current?.selectedId;
      const currentFocusedId = internals.current?.focusedId;
      if (!ppl) return;
      edgeArr.forEach(e => {
        const pa = ppl.find(x => x.id === e.a);
        const pb = ppl.find(x => x.id === e.b);
        if (!pa || !pb) return;
        const pts = getEdgePoints(pa, pb, currentSelectedId, currentFocusedId, mode);
        e.geo.setFromPoints(pts);
        if (e.type === 'marriage') e.line.computeLineDistances();
      });
    }

    // Anim loop
    let fc = 0;
    let animId;
    function animate() {
      animId = requestAnimationFrame(animate);
      fc++;
      if (fc % 2 === 0) {
        stepForce();
        const mode = internals.current?.graphMode || '2d';
        Object.values(nodeMap).forEach(({ sp, p }) => {
          const targetPos = p._p.clone();
          if (mode === '2d') targetPos.z = 0;
          sp.position.lerp(targetPos, 0.12);
        });
        updEdges();
      }
      renderer.render(scene, camera);
    }

    // Resize
    function onResize() {
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    }
    window.addEventListener('resize', onResize);

    updCam();
    animate();
    setTimeout(() => { simOn = false; }, 7000);

    internals.current = {
      scene, renderer, camera, nodeMap, edgeArr, ray, mo,
      simOn, ct, updCam,
      people: null, rels: null, selectedId: null, focusedId: null,
      pathMode: false, graphMode: '2d', onNodeClick: null, onPathSelect: null,
      setSimOn: (v) => { simOn = v; },
      getSimOn: () => simOn,
      resetView: () => { th = 0; ph = Math.PI / 2; cr = 620; ct.set(0, 0, 0); updCam(); },
    };

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointermove', handleHover);
      renderer.domElement.removeEventListener('wheel', handleWheel);
      if (mountNode && renderer.domElement.parentNode === mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Rebuild graph whenever people/rels change
  useEffect(() => {
    const st = internals.current;
    if (!st) return;
    const { scene, nodeMap, edgeArr } = st;

    // Init positions for new people that lack _p
    people.forEach((p, i) => {
      if (!p._p) {
        const a = (i / people.length) * Math.PI * 2;
        const r = 140 + Math.random() * 120;
        p._p = new THREE.Vector3(
          Math.cos(a) * r + (Math.random() - .5) * 40,
          Math.sin(a) * r + (Math.random() - .5) * 40,
          (Math.random() - .5) * 50
        );
        p._v = new THREE.Vector3();
      }
    });

    // Clear old
    Object.values(nodeMap).forEach(n => scene.remove(n.sp));
    edgeArr.forEach(e => scene.remove(e.line));
    edgeArr.length = 0;
    Object.keys(nodeMap).forEach(k => delete nodeMap[k]);

    // Build nodes
    people.forEach(p => {
      const isSel = p.id === selectedId;
      const isFoc = p.id === focusedId;
      const sp = makeSprite(p, isSel, isFoc);
      sp.position.copy(p._p);
      scene.add(sp);
      nodeMap[p.id] = { sp, p };
    });

    // Build edges
    rels.forEach(rel => {
      const pa = people.find(x => x.id === rel.a);
      const pb = people.find(x => x.id === rel.b);
      if (!pa || !pb) return;
      const pts = getEdgePoints(pa, pb, selectedId, focusedId, graphMode || '2d');
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = makeEdgeMat(rel);
      const line = new THREE.Line(geo, mat);
      if (rel.type === 'marriage') line.computeLineDistances();
      scene.add(line);
      edgeArr.push({ line, a: rel.a, b: rel.b, type: rel.type, geo, mat });
    });

    st.people = people;
    st.rels = rels;
  }, [people, rels, selectedId, focusedId, graphMode]);

  // Update callbacks & state refs
  useEffect(() => {
    const st = internals.current;
    if (!st) return;
    st.selectedId = selectedId;
    st.focusedId = focusedId;
    st.pathMode = pathMode;
    st.graphMode = graphMode;
    st.updCam();
    st.onNodeClick = onNodeClick;
    st.onPathSelect = onPathSelect;
  }, [selectedId, focusedId, pathMode, graphMode, onNodeClick, onPathSelect]);

  useEffect(() => {
    const st = internals.current;
    if (!st) return;

    if (graphMode === '3d') {
      people.forEach((person) => {
        if (Math.abs(person._p.z) < 1) {
          person._p.z = (Math.random() - 0.5) * 140;
        }
      });
    }

    st.setSimOn(true);
    st.updCam();
    const stopTimer = setTimeout(() => st.setSimOn(false), 3500);
    return () => clearTimeout(stopTimer);
  }, [graphMode, people]);

  // Expose resetView and sim control via fwdRef for TopBar
  useEffect(() => {
    const st = internals.current;
    if (!st) return;
    const apiObj = {
      resetView: st.resetView,
      setSimOn: st.setSimOn,
      getSimOn: st.getSimOn,
      recenter: () => { st.ct.set(0, 0, 0); st.updCam(); },
      shiftToOrigin: (id) => {
        const p = people.find(x => x.id === id);
        if (!p) return;
        const offset = p._p.clone();
        people.forEach(q => q._p.sub(offset));
        st.setSimOn(true);
        setTimeout(() => st.setSimOn(false), 5000);
        st.ct.set(0, 0, 0);
        st.resetView();
      },
      highlightPath: (path) => {
        const { nodeMap, edgeArr } = st;
        const pathSet = new Set(path);
        Object.values(nodeMap).forEach(({ sp, p }) => {
          sp.material.opacity = (path.length === 0 || pathSet.has(p.id)) ? 1 : 0.15;
        });
        edgeArr.forEach(e => {
          const onPath = path.length === 0 || (pathSet.has(e.a) && pathSet.has(e.b) &&
            (path.indexOf(e.a) === path.indexOf(e.b) - 1 || path.indexOf(e.b) === path.indexOf(e.a) - 1));
          e.line.material.opacity = path.length === 0 ? (e.type === 'marriage' ? .55 : .5) : (onPath ? 1 : 0.06);
        if (onPath && path.length > 0) e.line.material.color = new THREE.Color(0x3D7C47);
        else if (path.length === 0) e.line.material.color = new THREE.Color(e.type === 'marriage' ? 0x8A7350 : 0xC4B9A5);
        });
      },
      refreshNode: (id) => {
        const { nodeMap, scene: sc } = st;
        const entry = nodeMap[id];
        if (!entry) return;
        sc.remove(entry.sp);
        const p = entry.p;
        const sp = makeSprite(p, p.id === st.selectedId, p.id === st.focusedId);
        sp.position.copy(p._p);
        sc.add(sp);
        nodeMap[id] = { sp, p };
      },
      startSim: (duration = 5000) => {
        st.setSimOn(true);
        setTimeout(() => st.setSimOn(false), duration);
      },
    };
    // Attach to both mountRef and fwdRef
    if (mountRef.current) mountRef.current.__sceneApi = apiObj;
    if (fwdRef) {
      if (typeof fwdRef === 'function') fwdRef({ __sceneApi: apiObj });
      else fwdRef.current = { __sceneApi: apiObj };
    }
  });

  return <div ref={mountRef} style={{ position: 'fixed', inset: 0, zIndex: 0, touchAction: 'none' }} />;
});

export default Scene;
