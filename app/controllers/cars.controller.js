'use strict'

const dataModels = require('../models/cars.model')

function getCars(req, res) {
    dataModels.getCars((data, error) => {
        // 404 500
        res.json(data)
    })
}

function getOneCar(req, res) {
    console.log("id : ", req.params)
    const { id } = req.params
    dataModels.getOneCar(id, (data, error) => {
        res.json(data)
    })
}

function addCar (req, res) {

}

function editCar(req, res) {

}

function deleteCar(req, res) {

}
module.exports = {
    getCars,
    getOneCar,
    addCar,
    editCar,
    deleteCar
}