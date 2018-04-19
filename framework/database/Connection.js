class Connection {

	constructor(mongoose) {
		this.mongoose = mongoose
		this.conf = null
		this.host = null
		this.database = null
		this.con = null
	}

	config(conf) {
		this.conf = conf
		this.validate(conf)
		return this
	}

	connect() {
		return this.mongoose.connect(this.host + this.database)

	}

	validate(conf) {
		try {
			if(! conf.hasOwnProperty('host') ) {
				throw 'host key missing from mongoose'
			}

			this.host = conf.host

			if(! conf.hasOwnProperty('database')) {
				throw 'database key missing from mongoose'
			}

			this.database = conf.database
		} catch(err) {
			console.log(err)
			process.exit(1)
		}

	}

}

const mongoose = require('mongoose')

module.exports = new Connection(mongoose)