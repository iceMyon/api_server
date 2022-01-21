const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())


app.use(express.urlencoded({ extended: false })) //只能解析x-WWW-form-urlencoded格式

//一定要在路由之前，封装res.cc函数
app.use((req,res,next) => {
  res.cc = function(err,status = 1){
    //status默认值为1，表示失败的情况
    //err的值可能是一个错误对象，也可能是一个错误的字符串
    console.log('wobeidiaoyongle');
    res.send({
      status,
      message:err instanceof Error ? err.message:err
    })
  }
  next()
})



//导入并使用路由模块
const userRouter = require('./router/user')
const res = require('express/lib/response')
const req = require('express/lib/request')
app.use('/api', userRouter)

const port = 3007



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`http://127.0.0.1:${port}`))
