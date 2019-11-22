const express = require('express')
const router = express.Router()
const controller = require('../controllers/products')

router.post('/products', controller.post)

router.put('/products/:id', controller.put)

router.delete('/products', controller.delete)

module.exports = router
