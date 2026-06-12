
import { Router } from 'express';
import {postStaff, login } from '../controllers/authController.js';

const router = Router();

router.post('/registro', postStaff);

router.post('/login', login);

export default router;