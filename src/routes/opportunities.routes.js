'use strict'

const axios = require('axios').default
const environment = require('../environment/environment')

//A route destinated to get information about won opportunities on Pipedrive Platform

const { Router } = require('express')
const route = Router()

route.get('/', async (req, resp) => {
    const opportunities =  await axios.get(`https://${environment.pipedriveAccess.user}.pipedrive.com/api/v1/deals:${environment.pipedriveAccess.properties}?api_token=${environment.pipedriveAccess.token}`)
    const opportunitiesWon = opportunities.data.data.filter(opportunity => opportunity.status == "won")
    
    return resp.json(opportunitiesWon)
})

module.exports = route