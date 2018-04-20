class View {

	__set(basePath) {
		this.basePath = basePath
	}

	getPath() {
		return this.basePath + '/public/'
	}

	make(view) {
		return this.getPath() + view + '.html'
	}

}

module.exports = new View()