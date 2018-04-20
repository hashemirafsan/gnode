const Routes = require('../framework/routes/routes')
const express = require('express')
const router = express.Router()


router.route('/')
	  .get((req, res, next) => {
		Routes.arr.scm('UserController@testApi')
		Routes.app.controller(Routes.arr.controller)[Routes.arr.method](req,res,next)
	  })

module.exports = router