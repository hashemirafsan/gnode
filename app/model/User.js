const Model = require('../../framework/database/Model')

class User extends Model {
	constructor() {
		super()
		this.table = 'user'
		this.obj  = {
			firstname: String,
			lastname: String
		}
	}

	init() {
		return this.set(this.table, this.obj)
	}
}

module.exports = new User().init()