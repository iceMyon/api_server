exports.regUser = (req, res) => {
  const userInfo = req.body
  if(!userInfo.username || !userInfo.password){
    return res.send({
      status:1,
      message:'用户名或密码不合法'
    })
  }
  res.send('reguser ok')
}

exports.login = (req, res) => {
  res.send('login ok')
}