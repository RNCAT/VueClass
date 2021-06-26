const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./config/db.config')
const fileUpload = require('express-fileupload')
const apiversion = '/api/v1'
let port = process.env.PORT || 3000
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(fileUpload())
app.use(express.static('img'))

app.get(apiversion + '/books', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  db.query('SELECT * FROM books', (error, results, fields) => {
    if (error) return res.send(error)
    return res.send({ error: false, message: 'books list', data: results })
  })
})

app.get(apiversion + '/book/:bookid', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  var bookid = Number(req.params.bookid)

  db.query(
    'SELECT * FROM books where bookid=?',
    bookid.toString(),
    (error, results, fields) => {
      if (error) return res.send(error)
      return res.send({
        error: false,
        message: 'book id =' + bookid.toString(),
        data: results,
      })
    }
  )
})

app.post(apiversion + '/upload', function (req, res) {
  let sampleFile
  let uploadPath

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }

  sampleFile = req.files.imgFile
  uploadPath = __dirname + '/img/' + sampleFile.name
  let path = 'http://localhost:3000/' + sampleFile.name
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err)

    res.send(path)
  })
})

app.post(apiversion + '/book', (req, res) => {
  var title = req.body.title
  var price = req.body.price
  var isbn = req.body.isbn
  var pageCount = req.body.pageCount
  var publishedDate = req.body.publishedDate
  var thumbnailUrl = req.body.thumbnailUrl
  var shortDescription = req.body.shortDescription
  var author = req.body.author
  var category = req.body.category

  res.setHeader('Content-Type', 'application/json')
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  var bookid = Number(req.params.bookid)

  db.query(
    `INSERT INTO books 
    (title, price, isbn, pageCount, publishedDate, thumbnailUrl, 
    shortDescription, author, category) 
    VALUES ( '${title}', '${price}', '${isbn}', ${pageCount}, '${publishedDate}', '${thumbnailUrl}', 
    '${shortDescription}', '${author}', '${category}')`,
    (error, results, fields) => {
      if (error) return res.send(error)
      return res.send({ error: false, message: 'Insert new book' })
    }
  )
})

app.put(apiversion + '/book/:bookid', function (req, res) {
  var bookid = Number(req.params.bookid)
  var title = req.body.title
  var price = req.body.price
  var isbn = req.body.isbn
  var pageCount = req.body.pageCount
  var thumbnailUrl = req.body.thumbnailUrl
  var shortDescription = req.body.shortDescription
  var author = req.body.author
  var category = req.body.category

  db.query(
    `UPDATE books 
     SET title='${title}', price='${price}', isbn='${isbn}', pageCount='${pageCount}', 
     thumbnailUrl='${thumbnailUrl}', shortDescription=${shortDescription}, author='${author}', category='${category}'
     WHERE bookid='${bookid}'`,
    function (error, results, fields) {
      if (error) throw error
      return res.send({ error: false, message: 'Update book' })
    }
  )
})

app.delete(apiversion + '/book/:bookid', (req, res) => {
  var bookid = Number(req.params.bookid)
  res.setHeader('Content-Type', 'application/json')
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  db.query(
    `DELETE FROM books WHERE bookid = ${bookid}`,
    (error, results, fields) => {
      if (error) return res.send(error)
      return res.send({
        error: false,
        message: `delete bookid = ${bookid} success`,
      })
    }
  )
})

app.listen(port, () => {
  console.log('Server is up and running...')
})
