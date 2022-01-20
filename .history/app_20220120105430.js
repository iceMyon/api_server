const express = require('express')
const app = express()
const port = 3007

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`http://127.0.0.1:${port}!`))