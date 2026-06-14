import { Router } from 'express';
import { getProducts, postProducts } from '../controllers/productController.js';
import { verifyAuth } from '../middlewares/verifyAuth.js';

const router = Router();

router.get('/', getProducts);
router.post('/', verifyAuth, postProducts);

export default router;