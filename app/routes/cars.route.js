'use strict'

const route = require('express').Router()
const { getCars, getOneCar, addCar, editCar, deleteCar} = require('../controllers/cars.controller')

route.route('/').get(getCars)

route.route('/:id').get(getOneCar)

route.route('/').post(addCar)

route.route('/:id').put(editCar)

route.route('/:id').delete(deleteCar)


module.exports = route