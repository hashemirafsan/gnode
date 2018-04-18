const express = require('express')()
const router  = require('express').Router()
const Bootstrap = require(__dirname + '/framework/foundation/Bootstrap')
const Exception = require(__dirname + '/framework/exception/Exception')
const port = express.get('port') || 3000;


router.use((req, res, next) => {
	// Run Bootstrap
	Bootstrap.run(__dirname);
})

express.get('/', (req, res, next) => {
	Bootstrap.run(__dirname);
	res.status(200).json({
		message: 'yes'
	})
})


// Run Bootstrap
Bootstrap.run(__dirname);
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
