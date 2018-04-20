const express = require('express')()
const router  = require('express').Router()
const logger  = require('morgan')
const Bootstrap = require(__dirname + '/framework/foundation/Bootstrap')
const Exception = require(__dirname + '/framework/exception/Exception')
const port = express.get('port') || 3000;
const Web = require(__dirname + '/routes/web')
const Api = require(__dirname + '/routes/api')
const Connection = require(__dirname + '/framework/database/Connection')

// Database Connection
Connection.config({
	host:'mongodb://localhost:27017/',
	database: 'auction'
}).connect()

express.use(logger('dev'))


express.use((req, res, next) => {
	// Run Bootstrap
	Bootstrap.run(__dirname);
	next()
})

// all web view
express.use('/', Web)

// all api routes (version 1 api)
express.use('/api/v1/', Api)

// 404
express.use((req, res, next) => {
	Exception.set(express).notFound(req, res, next)
})
// error handler
express.use((err, req, res, next) => {
	Exception.set(express).errorHandler(err, req, res, next)
})


// Listen server
express.listen(port , () => console.log(`server running at port ${ port }`))
