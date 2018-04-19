class Schema {

	constructor(mongoose, schema) {
		this.mongoose = mongoose
	}

	create(obj) {
		return new schema(obj)
	}

}

const mongoose = require('mongoose')
const schema = mongoose.Schema

module.exports = new Schema(mongoose)
