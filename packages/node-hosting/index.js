const express = require('express')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
const serveStatic = require('serve-static')


const app = express()
const PUBLIC_PATH = path.join(__dirname, 'public')
const INDEX_PATH = path.join(PUBLIC_PATH, 'index.html')

app.use(cors())
app.use(serveStatic(PUBLIC_PATH))

app.get('/[^\.]+$', (req, res) => {
  fs.createReadStream(INDEX_PATH).pipe(res.set('Content-Type', 'text/html'))
})

const port = 13134

app.listen(port, () => {
  console.log(`App started with port[${port}]`)
})
