'use strict'

const { Router } = require('express')
const route = Router()
const blingModel = require('../models/bling.model')

route.get('/', async(req, resp) => {
    
    try {
        const orders = await blingModel.find({})

        return resp.status(200).json(orders)
        
    } catch (error) {        
        
        return resp.status(400).send('Error while searching for orders', error)
    }

})

module.exports = route
