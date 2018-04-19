const fs = require('fs')

class Application extends require('./Container') {

	constructor() {
		super()
	}

	set(baseFile, appConfig) {
		this.basePath = baseFile
		this.config = appConfig
	}

	controller(controller) {
		//console.log(controller)
		return require(this.basePath + '/app/http/controllers/' + controller)
	}


}

module.exports = new Application()