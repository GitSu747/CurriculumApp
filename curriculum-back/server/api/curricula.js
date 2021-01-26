const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send('hello world curricula')
})

router.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

router.get('/:id', function (req, res) {
    res.send('Get with id')
})

router.post('/:name', function (req, res) {
    res.send('Post With name')
})

router.delete('/:id', function (req, res) {
    res.send('Delete with id')
})

module.exports = router