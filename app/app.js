const express = require('express')
const app = express()
const port = 3000

app.set('port', port)

app.get('/', (req, res) => {
    res.send('Un altre text')
})

app.listen(app.get('port'), (err) => {
    console.log('Server runing on port' + app.get('port'))
})