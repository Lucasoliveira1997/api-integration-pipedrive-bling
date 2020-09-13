'use strict'

const axios = require('axios').default
const environment = require('../environment/environment')

//Importing the mongo Model to insert order by pipedrive
const blingModel = require('../models/bling.model')

//A route destinated to get information about won opportunities on Pipedrive Platform

const { Router } = require('express')
const route = Router()

route.get('/', async (req, resp) => {
    const opportunities =  await axios.get(`https://${environment.pipedriveAccess.user}.pipedrive.com/api/v1/deals:${environment.pipedriveAccess.properties}?api_token=${environment.pipedriveAccess.token}`)
    const opportunitiesWon = opportunities.data.data.filter(opportunity => opportunity.status == "won") 

    opportunitiesWon.forEach(opportunity => {
        const xml = environment.blingAccess.createXml(opportunity.title, opportunity.value)
        axios.post(`${environment.blingAccess.url}${encodeURI(xml)}`)
                .then(resp => resp)
                .catch(error => console.log(error))        


                blingModel.exists({ pipedriveId: opportunity.id }).then(resp => {                    
                    if (resp == false) {
                        blingModel.create({
                            pipedriveId: opportunity.id,
                            company: opportunity.title,
                            value: opportunity.value,
                            add_time: opportunity.add_time,
                            update_time: opportunity.update_time
                        })
                            .then(resp => resp)
                            .catch(error => console.log(error))
                    }                    
                })     
    })


    return resp.json(opportunitiesWon)
})

module.exports = route