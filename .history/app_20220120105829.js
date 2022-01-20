const express = require('express')
const cors = require('cors')
const app = express()
const port = 3007


app.use(cors())
app.user(express.urlencoded({extended: false})) //只能解析x-WWW-form-urlencoded格式
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`http://127.0.0.1:${port}!`))
