const express = require('express')
const port = 4000

const routes = require('./api')
const app = express()

app.use('/api/v1', routes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})