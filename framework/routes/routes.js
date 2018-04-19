const express = require('express')
const router = express.Router()
const fs = require('fs')
const ArrayHelper = require('../helpers/ArrayHelper')
let Application = require('../foundation/Application')

class Route {

	constructor(Arr, App) {
		this.arr = Arr
		this.app = App
	}

}

module.exports = new Route(ArrayHelper, Application)