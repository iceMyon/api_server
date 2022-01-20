const express = require('express')
const router = express.router()

router.post('/reguser',(req, res) => {
  res.send('reguser ok')
})

router.post('/login',(req, res) => {
  res.send('login ok')
})

module.exports = 