'use strict'

const dataModels = require('../models/cars.model')

const util = require('util')
const connection = require('../../config/connection')

async function getCars(req, res) {
    const query = util.promisify(connection.query).bind(connection)
    try {
        const rows = await query(`select * from cars`)
        console.log(rows)
    }finally {
        connection.end()
    }
    // dataModels.getCars((data, error) => {
    //     // 404 500
    //     res.json(data)
    // })
}

function getOneCar(req, res) {
    console.log("id : ", req.params)
    const { id } = req.params
    dataModels.getOneCar(id, (data, error) => {
        res.json(data)
    })
}

function addCar (req, res) {

    const {marca, descripcion} =  req.body
    console.log(`carros : ${marca}, ${descripcion}`)
    dataModels.addCar({marca, descripcion}, (data, error) => {
        res.json(data)
    })
}

function editCar(req, res) {

}

function deleteCar(req, res) {
    const { id } = req.params
    dataModels.deleteCar(id, (data, error) => {
        res.json(data)
    })

}
module.exports = {
    getCars,
    getOneCar,
    addCar,
    editCar,
    deleteCar
}