import express from 'express';
import shopController from '../controllers/shopController.js'

const router = express.Router()

router.get('/products', shopController.getProducts);
router.get('/products:id', shopController.getProduct);


export default router;