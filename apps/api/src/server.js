import 'dotenv/config'
import express from 'express';
import globalRoutes from './routes/index.js'; 
import { initializeApp, cert } from 'firebase-admin/app';
import { readFile } from 'fs/promises';
import { onRequest } from 'firebase-functions/v2/https';

const app = express();

try {
  const serviceAccount = JSON.parse(
    await readFile(new URL('./firebaseKey.json', import.meta.url))
  );
  initializeApp({ credential: cert(serviceAccount) });
} catch (error) {
  initializeApp();
}
app.use(express.json()); 

app.use('/api', globalRoutes);

export const smartpointapi = onRequest({ region: "us-central1" }, app);