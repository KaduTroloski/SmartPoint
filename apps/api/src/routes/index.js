import { Router } from 'express';
import productRoutes from './productRoutes.js'
import authRoutes from './authRoutes.js'


const globalRoutes = Router();

globalRoutes.use('/auth', authRoutes);
globalRoutes.use('/produtos', productRoutes);


export default globalRoutes;