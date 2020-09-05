'use strict'

const route = require('express').Router()
const { getCars } = require('../controllers/cars.controller')

route.route('/').get(getCars)

module.exports = route