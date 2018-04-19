const User = require('../../model/User')


class UserController {
	test(req, res, next) {
		res.status(200).json({
			message: 'yes got it '
		})
	}

	susmoy(req, res, next) {
		User.find({}, (err, users) => {
			res.status(200).json({
				message: users
			})
		})
	}
}

module.exports = new UserController()