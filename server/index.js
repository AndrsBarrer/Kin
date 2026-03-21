import 'dotenv/config';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profiles.js';
import factRoutes from './routes/facts.js';
import relationshipRoutes from './routes/relationships.js';
import treeRoutes from './routes/trees.js';
import proposalRoutes from './routes/proposals.js';
import graphRoutes from './routes/graph.js';
import joinRoutes from './routes/join.js';
import bootstrapRoutes from './routes/bootstrap.js';
import storyRoutes from './routes/stories.js';
import mediaRoutes from './routes/media.js';
import { authenticate } from './middleware/auth.js';
import { startDigestScheduler } from './services/digest.js';
import { getEmailDeliveryConfig } from './services/email.js';

function isAllowedDevelopmentOrigin(origin) {
  if (!origin) return true;

  try {
    const parsed = new URL(origin);
    const hostname = parsed.hostname;

    if (hostname === 'localhost' || hostname === '127.0.0.1') return true;
    if (hostname === '0.0.0.0') return true;
    if (hostname.endsWith('.local')) return true;
    if (/^192\.168\./.test(hostname)) return true;
    if (/^10\./.test(hostname)) return true;
    if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)) return true;
  } catch {
    return false;
  }

  return false;
}

function createCorsOrigin() {
  return process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL
    : (origin, callback) => {
        if (isAllowedDevelopmentOrigin(origin)) {
          callback(null, true);
          return;
        }

        callback(new Error('CORS origin not allowed'));
      };
}

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: createCorsOrigin(), credentials: true }));
  app.use(express.json({ limit: '10mb' }));

  app.use(authenticate);

  app.use('/api/auth', authRoutes);
  app.use('/api/trees', treeRoutes);
  app.use('/api/profiles', profileRoutes);
  app.use('/api/facts', factRoutes);
  app.use('/api/relationships', relationshipRoutes);
  app.use('/api/proposals', proposalRoutes);
  app.use('/api/graph', graphRoutes);
  app.use('/api/join', joinRoutes);
  app.use('/api/bootstrap', bootstrapRoutes);
  app.use('/api/stories', storyRoutes);
  app.use('/api/media', mediaRoutes);

  app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

  app.use((err, _req, res, next) => {
    void next;
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
  });

  return app;
}

const app = createApp();

export function startServer(appInstance = app, options = {}) {
  const port = options.port || process.env.PORT || 3001;
  const host = options.host || process.env.HOST || '0.0.0.0';

  return appInstance.listen(port, host, () => {
    const emailConfig = getEmailDeliveryConfig();
    console.log(`Kin API listening on ${host}:${port}`);
    console.log(`[Kin Email] Mode: ${emailConfig.mode} | From: ${emailConfig.from}`);
    startDigestScheduler();
  });
}

if (process.env.KIN_DISABLE_SERVER_LISTEN !== '1' && process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  startServer();
}

export default app;
