import { networkInterfaces } from 'node:os';
import { spawn } from 'node:child_process';
import net from 'node:net';

function isPrivateIpv4(address) {
  if (!address) return false;
  return address.startsWith('192.168.')
    || address.startsWith('10.')
    || /^172\.(1[6-9]|2\d|3[0-1])\./.test(address);
}

function getLanIp() {
  const interfaces = networkInterfaces();

  for (const entries of Object.values(interfaces)) {
    for (const entry of entries || []) {
      if (entry.family !== 'IPv4' || entry.internal) continue;
      if (isPrivateIpv4(entry.address)) return entry.address;
    }
  }

  return null;
}

function canListenOnPort(port) {
  return new Promise((resolve) => {
    const tester = net.createServer();

    tester.once('error', () => resolve(false));
    tester.once('listening', () => {
      tester.close(() => resolve(true));
    });

    tester.listen(port, '0.0.0.0');
  });
}

async function findAvailablePort(startPort) {
  let port = startPort;

  while (!(await canListenOnPort(port))) {
    port += 1;
  }

  return port;
}

const lanIp = getLanIp();

if (!lanIp) {
  console.error('No private IPv4 LAN address was detected. Connect to a local network or set FRONTEND_URL and VITE_API_URL manually.');
  process.exit(1);
}

const frontendPort = await findAvailablePort(5173);
const backendPort = await findAvailablePort(3001);
const frontendUrl = `http://${lanIp}:${frontendPort}`;
const backendUrl = `http://${lanIp}:${backendPort}`;
const apiUrl = `${backendUrl}/api`;
const env = {
  ...process.env,
  HOST: '0.0.0.0',
  PORT: String(backendPort),
  FRONTEND_URL: frontendUrl,
  BACKEND_URL: backendUrl,
  API_BASE_URL: apiUrl,
  VITE_API_URL: apiUrl,
};

console.log(`Starting Kin for LAN access on ${lanIp}`);
console.log(`Frontend: ${frontendUrl}`);
console.log(`API: ${apiUrl}`);
console.log('Magic links generated in development will use the LAN frontend URL above.');

if (frontendPort !== 5173 || backendPort !== 3001) {
  console.log(`Using available ports instead of defaults: frontend ${frontendPort}, backend ${backendPort}.`);
}

const child = spawn('npx', [
  'concurrently',
  '-n', 'client,server',
  '-c', 'green,blue',
  `npm run dev:client -- --host 0.0.0.0 --port ${frontendPort} --strictPort`,
  'npm run dev:server',
], {
  env,
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
