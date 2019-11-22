const mongoose = require('mongoose')
const Product = mongoose.model('Product')


exports.post = (req, res, next) => {
    const product = new Product(req.body)

    // product.title = req.body.title

    product.save()
        .then(() => {
            res.status(201).send(req.body)
        }).catch(error => {
            res.status(400).send(error)
        })
}

exports.put = (req, res, next) => {
    const id = req.params.id
    res.status(201).send({
        id: id,
        item: req.body,
        test: 'Req put'
    })
}

exports.delete = (req, res, next) => {
    res.status(200).send({
        test: req.body,
        text2: "Req delete"
    })
}
