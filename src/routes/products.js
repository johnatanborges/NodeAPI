const express = require('express')
const router = express.Router()

router.post('/', (req, res, next) => {
    res.status(201).send({
        test: req.body.name,
        test2: 'Req post'
    })
})
router.put('/', (req, res, next) => {
    const id = req.params.id
    res.status(201).send({
        id: id,
        item: req.body,
        test: 'Req put'
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).send({
        test: req.body,
        text2: "Req delete"
    })
})

module.exports = router
