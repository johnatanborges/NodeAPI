const express = require('express')
const router = express.Router()
const controller = require('../controllers/product')

router.get('/products', controller.get)

router.get('/products/:slug', controller.getBySlug)

router.get('/products/tags/:tag', controller.getByTag)

router.post('/products', controller.post)

router.put('/products/:id', controller.put)

router.delete('/products/:id', controller.delete)

module.exports = router
