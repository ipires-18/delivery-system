import path from 'node:path'
import multer from 'multer'
import { Router } from 'express'
import { listCategories } from './app/useCases/categories/listCategories'
import { createCategory } from './app/useCases/categories/createCategory'
import { listProduct } from './app/useCases/products/listProducts'
import { createProduct } from './app/useCases/products/createProduct'
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory'
import { listOrders } from './app/useCases/orders/listOrders'
import { createOrders } from './app/useCases/orders/createOrders'
import { chanceOrderStatus } from './app/useCases/orders/chanceOrderStatus'
import { deleteOrders } from './app/useCases/orders/deleteOrders'

export const router = Router()

const upload = multer({
 storage: multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.resolve(__dirname, '..', 'uploads'))
  },
  filename(req, file, callback){
    callback(null, `${Date.now()}-${file.originalname}`)
   }
 }),
})

//List categories
router.get('/categories', listCategories)

// Create category
router.post('/categories', createCategory)

//List Products
router.get('/products', listProduct)

// Create products
router.post('/products', upload.single('image') ,createProduct)

// List products by category
router.get('/categories/:categoryId/products', listProductsByCategory)

// List orders
router.get('/orders', listOrders)

// Create orders
router.post('/orders', createOrders)

// Chance order status
router.patch('/orders/:orderId', chanceOrderStatus)

// Delete order
router.delete('/orders/:orderId', deleteOrders)
