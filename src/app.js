const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

// Mongoose
mongoose.connect('mongodb://localhost/node_api', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error, db) => {
    if(error) {
        console.log('MongoDB error: ', error)
    } else {
        console.log('MongoDB is connected')
    }
})

const Product = require('./models/product')

// bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const index = require('./routes/index.js')
const products = require('./routes/product.js')

app.use(index)
app.use(products)

module.exports = app
