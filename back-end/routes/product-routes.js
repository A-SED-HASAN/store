const express = require('express')

const router = express.Router()

const productControllers = require('../controllers/product-controllers')

router.get('/products', productControllers.getAllProducts)

router.get('/products/:id', productControllers.getProduct)

router.get('/singleProduct/:id', productControllers.getSingleProduct)

module.exports = router
