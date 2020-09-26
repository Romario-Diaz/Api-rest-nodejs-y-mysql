'use strict'

const mysql = require('mysql'),
      data = require('./datosPrivados.json'),
      objectConnection = {
          host: data.mysql.host,
          port: data.mysql.port,
          user: data.mysql.user,
          pass: data.mysql.pass,
          database: data.mysql.database
      }

    const myConn = mysql.createConnection(objectConnection)

    myConn.connect((err) => {
        if(err) {
            console.log(`ha ocurrido un error : ${err}`)
        }else {
            console.log(`base de datos conectada !!!`)
        }
    })

module.exports = myConn