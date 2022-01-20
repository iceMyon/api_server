const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const userRouter = require('./router/user')
app.use('/api',userRouter)

const port = 3007



app.user(express.urlencoded({extended: false})) //只能解析x-WWW-form-urlencoded格式
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`http://127.0.0.1:${port}!`))
