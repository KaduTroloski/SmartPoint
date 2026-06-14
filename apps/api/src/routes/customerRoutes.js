import { Router } from 'express';
import {
  postCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} from '../controllers/customerController.js';
import { verifyAuth } from '../middlewares/verifyAuth.js';

const router = Router();

router.use(verifyAuth);

router.post('/', postCustomer);
router.get('/', getCustomers);
router.get('/:id', getCustomerById);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;
