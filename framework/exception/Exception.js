class Exception {

	constructor() {
		this.vm = null
	}

	set(app) {
		this.vm = app
		return this
	}

	errorHandler(err, req, res, next) {

		const error =  err || {}
		const status = err.status || 500

		res.status(status).json({
			error: {
				message: error.message
			}
		})

		console.log('error handler: ' + err)
	}

	notFound(req, res, next) {
		const err = new Error('Not Found');
		err.status = 404
		next(err)
	}

	missing(txt) {
		console.log('missing: ' + txt);
	}

}

module.exports = new Exception