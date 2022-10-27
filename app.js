const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')

const app = express()
const port = 3000
const routes = require('./routes')
// db
require('./config/mongoose')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// express body-parser
app.use(express.urlencoded({ extended: true }))
// use session
app.use(session({
  secret: 'mySecret', // 用來簽名存放在cookie的sessionID
  name: 'user', // 存放在cookie的key
  saveUninitialized: false, // 設定為false，可避免存放太多空的session進入session store
  resave: true, // 設定為true，可避免session被清掉
}))

// set routes
app.use(routes)

app.listen(port, () => {
  console.log(`app is runing on localhost:${port}`)
})