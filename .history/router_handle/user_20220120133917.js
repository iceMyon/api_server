exports.regUser = (req, res) => {
  const userInfo = req.body
  console.log(userInfo);
  res.send('reguser ok')
}

exports.login = (req, res) => {
  res.send('login ok')
}