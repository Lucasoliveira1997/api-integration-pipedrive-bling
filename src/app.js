const app = require('express')()

const bodyParser = require('body-parser')
const environment = require('./environment/environment')

//applying middlewares
app.use(bodyParser.json())

//importing database ODM
const mongoose = require('mongoose')

//connectiong database
mongoose.connect(environment.db.url, environment.db.options)
mongoose.set('useCreateIndex', true)

//To listen events happening on Database and show on console.log
mongoose.connection.on('connected', () => console.log('Database Connected'))
mongoose.connection.on('disconnected', () => console.log('Database Disconnected'))
mongoose.connection.on('error', () => console.log('Database connection Failed'))

//importing routes/endpoints
const opportunitiesRoutes = require('./routes/opportunities.routes')
const ordersRoutes = require('./routes/orders.routes')

//Applying route with all HTTP methods
app.use('/opportunities', opportunitiesRoutes)
app.use('/orders', ordersRoutes)

module.exports = app