const db = require('../db/index')

exports.regUser = (req, res) => {
  const userInfo = req.body
  if(!userInfo.username || !userInfo.password){
    return res.send({
      status:1,
      message:'用户名或密码不合法'
    })
    //定义sql语句，查询用户名是否被占用
    const sqlStr = 'select * from ev_users where username=?'
    
  }
  //判断用户名是否被占用
  if(results.length > 0){
    return res.send({status: 1,message: '用户名被占用，请更换'})
  }
  
}

exports.login = (req, res) => {
  res.send('login ok')
}