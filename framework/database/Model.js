const Schema = require('./Schema')

class Model {

	set(table, obj) {
		return Schema.mongoose.model(table, Schema.create(obj))
	}
}

module.exports = Model
