const express = require('express')
const router = express.Router()
const User = require('../../models/user') // 載入model

router.get('/', (req, res) => {
  const name = req.session.user
  if (name) {
    return res.render('index', { name })
  }
  return res.redirect('/login')
})

module.exports = router