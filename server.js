//imports 
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

//import router to server 
const indexRouter = require('./routes/index')

//configure express application
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
