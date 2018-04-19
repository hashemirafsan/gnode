const Routes = require('../framework/routes/routes')
const express = require('express')
const router = express.Router()


router.route('/')
	  .get((req, res, next) => {
		Routes.arr.scm('UserController@test')
		let controller = require(Routes.app.controller(Routes.arr.controller))
		//console.log(Routes.arr.method)
		controller[Routes.arr.method](req, res, next)
	  })


router.route('/susmoy')
	  .get((req, res, next) => {
		Routes.arr.scm('UserController@susmoy')
		Routes.app.controller(Routes.arr.controller)[Routes.arr.method](req,res,next)
		//require(Routes.app.controller(Routes.arr.controller))[Routes.arr.method](req, res, next)
	  })


module.exports = router