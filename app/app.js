'use strict'

const express = require('express')
const port = (process.env.PORT || 3000)

// Inizializations

const app = express()

// settings

app.set('port', port)

// middlewares

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes

app.use(require('./routes/cars.route'))

module.exports = app