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
    }
}

module.exports = dataModels