const products = require('../models/products')
const singleProduct = require('../models/singleProduct')
const getAllProducts = (req, res, next) => {
  res.json(products)
}

const getProduct = (req, res, next) => {
  const product = products.find((item) => {
    return item.id === req.params.id
  })

  res.json(product)
}

const getSingleProduct = (req, res, next) => {
  const product = singleProduct.find((item) => {
    return item.id === req.params.id
  })

  res.json(product)
}
exports.getAllProducts = getAllProducts
exports.getProduct = getProduct
exports.getSingleProduct = getSingleProduct
