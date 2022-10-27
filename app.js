const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is a express project')
})

app.listen(port, () => {
  console.log(`app is runing on localhost:${port}`)
})