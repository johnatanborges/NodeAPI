const express = require('express')

const app = express()
const router = express.Router()

const home = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Node API',
        version: '0.0.1'
    })
})

app.use('/', home)

module.exports = app
