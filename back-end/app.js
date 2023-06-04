const express = require('express')

const productRoutes = require('./routes/product-routes')

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  next()
})

app.use(express.static('public'))
app.use('/images', express.static('images'))

app.use('/', productRoutes)

app.listen(8000)
