import { useEffect, useRef, useCallback, forwardRef } from 'react';
import * as THREE from 'three';
import { BRANCH } from '../data/familyData';

const REPEL = 14000, ATT = 0.009, DAMP = 0.80, IDEAL = 150;

function makeNodeTex(p, isSelected, isFocused) {
  const C = document.createElement('canvas');
  C.width = 128; C.height = 128;
  const ctx = C.getContext('2d');
  const cx = 64, cy = 64, r = isFocused ? 46 : (isSelected ? 44 : 38);
  const col = BRANCH[p.branch]?.hex || '#888';

  if (isSelected || isFocused) {
    ctx.beginPath(); ctx.arc(cx, cy, r + 6, 0, Math.PI * 2);
    ctx.fillStyle = isFocused ? col + '55' : col + '33';
    ctx.fill();
  }

  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();

  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = col;
  ctx.lineWidth = isFocused ? 5 : (isSelected ? 4 : 3);
  ctx.stroke();

  ctx.font = `600 ${isFocused ? 22 : 18}px Inter, sans-serif`;
  ctx.fillStyle = col;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(p.firstName[0] + p.lastName[0], cx, cy);

  ctx.font = '500 13px Inter, sans-serif';
  ctx.fillStyle = '#1E1611';
  ctx.fillText(p.firstName, cx, cy + r + 14);
  ctx.font = '400 11px Inter, sans-serif';
  ctx.fillStyle = '#7A6A58';
  ctx.fillText(p.lastName, cx, cy + r + 26);

  if (p.birth) {
    ctx.font = '400 10px Inter, sans-serif';
    ctx.fillStyle = '#A89880';
    const yr = p.birth + (p.death ? `–${p.death}` : '');
    ctx.fillText(yr, cx, cy + r + 38);
  }
  return C;
}

function makeSprite(p, isSelected, isFocused) {
  const tex = new THREE.CanvasTexture(makeNodeTex(p, isSelected, isFocused));
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
  const sp = new THREE.Sprite(mat);
  const scale = isFocused ? 110 : (isSelected ? 105 : 95);
  sp.scale.set(scale, scale, 1);
  sp.userData.pid = p.id;
  return sp;
}

function makeEdgeMat(rel) {
  if (rel.type === 'marriage')
    return new THREE.LineDashedMaterial({ color: 0x8A5A1A, dashSize: 6, gapSize: 4, transparent: true, opacity: 0.55 });
  return new THREE.LineBasicMaterial({ color: 0xB4A898, transparent: true, opacity: 0.5 });
}

const Scene = forwardRef(function Scene({
  people, rels, selectedId, focusedId, pathMode,
  onNodeClick, onPathSelect, tooltipRef
}, fwdRef) {
  const mountRef = useRef(null);
  const internals = useRef(null);

  // Initialize Three.js scene — runs once
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF2EDE6);
    scene.fog = new THREE.Fog(0xF2EDE6, 800, 1600);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(innerWidth, innerHeight);
    renderer.shadowMap.enabled = false;
    mountRef.current.appendChild(renderer.domElement);

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
    const ct = new THREE.Vector3();
    let simOn = true;
    let hovId = null;

    function updCam() {
      camera.position.x = ct.x + cr * Math.sin(ph) * Math.sin(th);
      camera.position.y = ct.y + cr * Math.cos(ph);
      camera.position.z = ct.z + cr * Math.sin(ph) * Math.cos(th);
      camera.lookAt(ct);
    }

    // Mouse events
    renderer.domElement.addEventListener('mousedown', e => { drag = true; lx = e.clientX; ly = e.clientY; });
    window.addEventListener('mousemove', e => {
      if (!drag) return;
      th -= (e.clientX - lx) * .005;
      ph = Math.max(.08, Math.min(Math.PI - .08, ph + (e.clientY - ly) * .005));
      lx = e.clientX; ly = e.clientY; updCam();
    });
    window.addEventListener('mouseup', () => { drag = false; });
    renderer.domElement.addEventListener('wheel', e => {
      cr = Math.max(120, Math.min(1800, cr + e.deltaY * .5)); updCam();
    }, { passive: true });

    renderer.domElement.style.cursor = 'grab';

    // Hover tooltip
    renderer.domElement.addEventListener('mousemove', e => {
      if (drag) return;
      mo.x = (e.clientX / innerWidth) * 2 - 1;
      mo.y = -(e.clientY / innerHeight) * 2 + 1;
      ray.setFromCamera(mo, camera);
      const sps = Object.values(nodeMap).map(n => n.sp);
      const hits = ray.intersectObjects(sps, false);
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
    });

    // Click
    renderer.domElement.addEventListener('click', e => {
      mo.x = (e.clientX / innerWidth) * 2 - 1;
      mo.y = -(e.clientY / innerHeight) * 2 + 1;
      ray.setFromCamera(mo, camera);
      const hits = ray.intersectObjects(Object.values(nodeMap).map(n => n.sp), false);
      if (!hits.length) return;
      const id = hits[0].object.userData.pid;
      const st = internals.current;
      if (st?.pathMode) { st.onPathSelect?.(id); }
      else { st?.onNodeClick?.(id); }
    });

    // Force sim step
    function stepForce() {
      if (!simOn) return;
      const ppl = internals.current?.people;
      const rls = internals.current?.rels;
      const fid = internals.current?.focusedId;
      if (!ppl || !rls) return;

      ppl.forEach((a, i) => {
        if (a.id === fid) { a._p.set(0, 0, 0); a._v.set(0, 0, 0); return; }
        const f = new THREE.Vector3();
        ppl.forEach((b, j) => {
          if (i === j) return;
          const d = new THREE.Vector3().subVectors(a._p, b._p);
          const dist2 = Math.max(d.lengthSq(), 900);
          d.normalize().multiplyScalar(REPEL / dist2);
          f.add(d);
        });
        f.add(a._p.clone().multiplyScalar(-0.0015));
        a._v.add(f);
        a._v.multiplyScalar(DAMP);
        a._p.add(a._v);
      });

      rls.forEach(rel => {
        const pa = ppl.find(x => x.id === rel.a);
        const pb = ppl.find(x => x.id === rel.b);
        if (!pa || !pb) return;
        const d = new THREE.Vector3().subVectors(pb._p, pa._p);
        const stretch = (d.length() - IDEAL) * ATT;
        d.normalize().multiplyScalar(stretch);
        if (pa.id !== fid) pa._v.add(d);
        if (pb.id !== fid) pb._v.sub(d);
      });
    }

    // Update edges
    function updEdges() {
      const ppl = internals.current?.people;
      if (!ppl) return;
      edgeArr.forEach(e => {
        const pa = ppl.find(x => x.id === e.a);
        const pb = ppl.find(x => x.id === e.b);
        if (!pa || !pb) return;
        e.geo.setFromPoints([pa._p.clone(), pb._p.clone()]);
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
        Object.values(nodeMap).forEach(({ sp, p }) => sp.position.lerp(p._p, 0.12));
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
      pathMode: false, onNodeClick: null, onPathSelect: null,
      setSimOn: (v) => { simOn = v; },
      getSimOn: () => simOn,
      resetView: () => { th = 0; ph = Math.PI / 2; cr = 620; ct.set(0, 0, 0); updCam(); },
    };

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
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
      const pts = [pa._p.clone(), pb._p.clone()];
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = makeEdgeMat(rel);
      const line = new THREE.Line(geo, mat);
      if (rel.type === 'marriage') line.computeLineDistances();
      scene.add(line);
      edgeArr.push({ line, a: rel.a, b: rel.b, type: rel.type, geo, mat });
    });

    st.people = people;
    st.rels = rels;
  }, [people, rels, selectedId, focusedId]);

  // Update callbacks & state refs
  useEffect(() => {
    const st = internals.current;
    if (!st) return;
    st.selectedId = selectedId;
    st.focusedId = focusedId;
    st.pathMode = pathMode;
    st.onNodeClick = onNodeClick;
    st.onPathSelect = onPathSelect;
  }, [selectedId, focusedId, pathMode, onNodeClick, onPathSelect]);

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
          if (onPath && path.length > 0) e.line.material.color = new THREE.Color(0xc9973a);
          else if (path.length === 0) e.line.material.color = new THREE.Color(e.type === 'marriage' ? 0x8A5A1A : 0xB4A898);
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

  return <div ref={mountRef} style={{ position: 'fixed', inset: 0, zIndex: 0 }} />;
});

export default Scene;
