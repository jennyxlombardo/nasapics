const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios')
//const { conn } = require('../db')
const { nasapics } = require('../db')
const { Op } = require('sequelize')
let router = Router()

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${apiKey}`
  )
  console.log(apiKey)
  const apiInfo = await apiUrl.near_earth_object[2015-09-08].map(el => {
    return {
      name: el.name,
      id: el.id,
      image: el.nasa_jpl_url,
      diameterMax: el.estimated_diameter.kilometers.estimated_diameter_max,
      diameterMin: el.estimated_diameter.estimated_diameter_min,
      hazardous: el.is_potentially_hazardous_asteroid,
      approachDate: el.close_approach_data.map(e=>e.close_approach_date),
      miss: el.close_approach_data.map(e=> e.miss_distance.kilometers),
      orbitingBody: el.close_approach_data.map(e=>e.orbitingBody)
    }
  })
  console.log("This give me the apiInfo:", apiInfo);
//   return apiInfo
}


const getDb = async () => {
    //db and activity
    return await nasapics.findAll({
     through: {
         attributes: []
     }
    })
  }



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router
