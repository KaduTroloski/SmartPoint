import { Router } from 'express';
import productRoutes from './productRoutes.js'
import authRoutes from './authRoutes.js'
import salesRoutes from './salesRoutes.js'
import customerRoutes from './customerRoutes.js';
import pixRoutes from './pixRoutes.js';


const globalRoutes = Router();

globalRoutes.use('/auth', authRoutes);
globalRoutes.use('/produtos', productRoutes);
globalRoutes.use('/sales', salesRoutes);
globalRoutes.use('/customers', customerRoutes);
globalRoutes.use('/pix', pixRoutes);


export default globalRoutes;

