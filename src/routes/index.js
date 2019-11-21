const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node API',
        version: '0.0.1',
    })
})

router.post('/', (req, res, next) => {
    res.send("Test post")
})

router.put('/', (req, res, next) => {
    const id = req.params.idT
    res.status(201).send('Test put')
})


module.exports = router
