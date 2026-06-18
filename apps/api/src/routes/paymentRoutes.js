import { Router } from 'express';

import { iniciarPagamento, confirmarParcelaCartao } from '../controllers/paymentController.js';

import { verifyAuth } from '../middlewares/verifyAuth.js';

const router = Router();


router.post('/iniciar', iniciarPagamento);
router.post('/confirmar-parcela', confirmarParcelaCartao);

export default router


