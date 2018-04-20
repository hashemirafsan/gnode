const fs = require('fs');
const Application = require('./Application')
const View = require('../view/view')

class Bootstrap {

	constructor() {
		this.file = null
		this.config = null
		this.exception = null
	}

	run(dir) {
		this.constructor.init(dir)
		this.constructor.validateApp()
		this.constructor.registerApplication()
		this.constructor.registerView()
	}

	static init(dir) {
		this.file = dir

		this.exception = require(this.file + '/framework/exception/Exception')

		try {
			if ( fs.existsSync(this.file + '/app/modules/Activator.js') ) {
				require(this.file + '/app/modules/Activator.js').init()
			} else {
				throw 'Activator file is missing from this app'
			}
		} catch(e) {
			this.exception.missing(e)
			process.exit(1)
		}

		try {
			if ( fs.existsSync(this.file + '/app/modules/Deactivator.js') ) {
				require(this.file + '/app/modules/Deactivator.js').init()
			} else {
				throw 'Deactivator file is missing from this app'
			}
		} catch(e) {
			this.exception.missing(e)
			process.exit(1)
		}
		
	}

	static validateApp() {

		// check gnode exists
		if(! fs.existsSync(this.file + '/gnode.json')) {
			this.exception.missing('gnode json missing from this app.')
			process.exit(1)
		}

		this.config = JSON.parse(fs.readFileSync(this.file + '/gnode.json', 'utf-8'))

		// Config directory exists
		if(! fs.existsSync(this.file + '/config')) {
			this.exception.missing('config.js file missing from config directory')
			process.exit(1)
		}

		// Autoload key exists
		if(! this.config.hasOwnProperty('autoload') ) {
			this.exception.missing('autoload key is missing from gnode.json')
			process.exit(1)
		}

		// namespace key exists
		if(! this.config.autoload.hasOwnProperty('namespace') ) {
			this.exception.missing('Namespace key is missing from gnode.json')
			process.exit(1)
		}

		//console.log(this.config)
	}

	static registerApplication() {
		Application.set(this.file, this.config)
	}

	static registerView() {
		View.__set(this.file)
		console.log(View)
	}
}

module.exports = new Bootstrap()