import 'dotenv/config';
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
import { authenticate } from './middleware/auth.js';
import { startDigestScheduler } from './services/digest.js';

const app = express();
const PORT = process.env.PORT || 3001;

// ── Global middleware ───────────────────────────────
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '2mb' }));

// ── Auth context (sets req.user if valid session) ───
app.use(authenticate);

// ── Routes ──────────────────────────────────────────
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

// ── Health check ────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

// ── Error handler ───────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Kin API listening on :${PORT}`);
  startDigestScheduler();
});

export default app;
