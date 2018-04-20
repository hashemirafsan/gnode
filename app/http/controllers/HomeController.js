const View = require('../../../framework/view/view')

class HomeController {

	hello(req, res, next) {
		//console.log(View.make())
		res.sendFile(View.make('index'))

	}

}

module.exports = new HomeController()