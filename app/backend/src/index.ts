import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import pingRouter from './routes/ping-router.js';
import jobStatusPoller from './services/job-status-poller.js';
import cleanupScheduler from './services/cleanup-scheduler.js';
import sequenceRouter from './routes/sequence-router.js';
import lsfService from './services/LSF-service.js';
import multer from '@koa/multer';

const app = new Koa();
const PORT: number = Number(process.env.PORT) || 10000;

jobStatusPoller.init(lsfService);
cleanupScheduler.init();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173',
    allowMethods: ['GET', 'POST'],
    allowHeaders: ['Content-Type']
}));

const upload = multer();

app.use(upload.any());
app.use(bodyParser());

app.use(pingRouter.routes());
app.use(sequenceRouter.routes());

app.on('error', (err, ctx) => {
    console.error('Server error:', err);
});

const gracefulShutdown = () => {
    console.log('Shutting down gracefully...');
    jobStatusPoller.stop();
    cleanupScheduler.stop();
    process.exit(0);
};

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`DATABASE_URL: ${process.env.DATABASE_URL || 'default'}`);
    jobStatusPoller.start();
    cleanupScheduler.start();
});