const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())


app.use(express.urlencoded({extended: false})) //只能解析x-WWW-form-urlencoded格式

//一定要在路由之前，封装res.cc函数
app.use(req,res,next)

//导入并使用路由模块
const userRouter = require('./router/user')
const res = require('express/lib/response')
app.use('/api',userRouter)

const port = 3007



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`http://127.0.0.1:${port}`))
