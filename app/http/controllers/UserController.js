const User = require('../../model/User')
//const View = require('../../../framework/view/view')

class UserController {

	testApi(req, res, next) {

		res.status(200).json({
			message: 'This is test api routes'
		})
	}
}

module.exports = new UserController()