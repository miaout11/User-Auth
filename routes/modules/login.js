const express = require('express')
const session = require('express-session')
const router = express.Router()
const User = require('../../models/user')

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email: email })
    .then(user => {
      if (user.password === password) {
        req.session.user = user.firstname
        return res.render('index', { name: user.firstname })
      } else {
        const fail = 'Invalid password, please try again!'
        return res.render('login', { email, fail })
      }
    })
    .catch(error => {
      console.error(error)
      const fail = 'Invalid email, please try again!'
      return res.render('login', { email, fail })
    })
})

module.exports = router