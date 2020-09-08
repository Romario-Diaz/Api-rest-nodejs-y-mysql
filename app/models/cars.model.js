'use strict'

const connection = require('../../config/connection')

var dataModels = {
    getCars : (callback) => {
        if(connection) {
            let sql = `select * from cars`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getOneCar : (data, callback) => {
        console.log("el id : ", data)
        if(connection) {
            let sql = `select * from cars where id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    addCar : (data, callback) => {

        if(connection) {
            let sql = `insert into cars(marca, descripcion) values (${connection.escape(data.marca)}, ${connection.escape(data.descripcion)})`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'carro insertado'})
            })
        }
    },
    deleteCar : (data, callback) => {
        if(connection) {
            let sql = `delete from cars where id = ${connection.escape(data)}`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message: 'carro eliminado'})
            })
        }
    }
}

module.exports = dataModels