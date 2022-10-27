const User = require('../user')
const db = require('../../config/mongoose')
const users = [
  {
    firstname: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstname: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstname: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstname: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstname: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

db.once('open', () => {
  console.log('userSeeder connected!')
  User.create(users)
    .then(() => {
      console.log('userseeder done!')
      db.close()
    })
    .catch(error => console.log(error))
})