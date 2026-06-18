import { Router } from 'express';
import productRoutes from './productRoutes.js'
import authRoutes from './authRoutes.js'
import salesRoutes from './salesRoutes.js'
import customerRoutes from './customerRoutes.js';
import paymentRoutes from './paymentRoutes.js'


const globalRoutes = Router();

globalRoutes.use('/auth', authRoutes);
globalRoutes.use('/produtos', productRoutes);
globalRoutes.use('/sales', salesRoutes);
globalRoutes.use('/customers', customerRoutes);
globalRoutes.use('/pagamento', paymentRoutes);

export default globalRoutes;
