const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000
// db
require('./config/mongoose')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// express body-parser
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`app is runing on localhost:${port}`)
})