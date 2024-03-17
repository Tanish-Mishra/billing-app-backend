const express = require('express')
const router = express.Router();
const {addProduct, getAllProducts, editProductById, deleteProductById} = require('../controllers/productController')
const { verifyToken }  = require('../middlewares/authMiddleware')

router.post('/add-product',verifyToken,addProduct)
router.get('/get-products',verifyToken,getAllProducts)
router.patch('/edit-product',verifyToken,editProductById)
router.delete('/delete-product',verifyToken,deleteProductById)

module.exports = router