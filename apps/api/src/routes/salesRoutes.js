import { Router } from 'express';
import { postSale, getSales, getSaleById } from '../controllers/salesController.js';
import { verifyAuth } from '../middlewares/verifyAuth.js';

const router = Router();

router.use(verifyAuth);

router.post('/', postSale);
router.get('/', getSales);
router.get('/:id', getSaleById);

export default router;
