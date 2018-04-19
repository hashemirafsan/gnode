
class ArrayHelper {

	constructor() {
		this.controller = null
		this.method = null
	}

	// Split Controller and Method
	scm(str) {
		let splitStr = str.split('@')
		this.controller = splitStr[0]
		this.method = splitStr[1]
	}

}

module.exports = new ArrayHelper()