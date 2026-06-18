import { Router } from 'express';
import { criarPagamentoPix, consultarPagamentoPix } from '../controllers/pixController.js';

const router = Router();

router.post('/', criarPagamentoPix);
router.get('/:id', consultarPagamentoPix);

export default router;
