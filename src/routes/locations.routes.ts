import { Router } from 'express'
import knex from '../database/connection'
const locationsRouter = Router()


locationsRouter.post('/', async (req, res) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longetude,
        cidade,
        estado,
        items
    } =  req.body

    const location  = {
        image: "fake.jpg",
        name,
        email,
        whatsapp,
        latitude,
        longetude,
        cidade,
        estado
        
    }
    const newIds = await knex('locations').insert(location)
    const locationId = newIds[0]
    const locationsitems = items.map((item_id: number) =>{
        return {
            item_id,
            location_id:locationId
        }
     })

    await knex('location_items').insert(locationsitems)
    return res.json({
        id: locationId,
        ...location
    })
})


export default locationsRouter