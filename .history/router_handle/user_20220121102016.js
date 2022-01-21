const db = require('../db/index')
//导入bcrypt.js
const bcrypt = require('bcryptjs')


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
  const sqlStr = 'select * from ev_users where username = ?'
  db.query(sqlStr, userInfo.username,(err, result) => {
    if(err) return res.cc(err)
    if(result.length > 0){
      return res.send({status: 1,message: '用户名被占用，请更换'})
    }
    
    console.log(userInfo)
  })
  //调用bcrypt.hashSync()对密码进行加密
  userInfo.password = bcrypt.hashSync(userInfo.password,10)
  console.log(userInfo)

  //定义插入新用户的sql语句
  const sql = 'insert into ev_users set ?'
  //调用db.query()执行SQL语句
  db.query(sql,{username:userInfo.username,password:userInfo.password},(err,result) => {
    //判断sql语句是否成功
    if(err) return  res.cc(err)
    if(result.affectedRows !==1) return res.cc('注册用户失败，请稍后再试')
    res.send({status: 0,message: '注册成功'})
  })
  

}

exports.login = (req, res) => {
  res.send('login ok')
}