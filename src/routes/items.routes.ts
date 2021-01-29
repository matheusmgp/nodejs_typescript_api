import { Router } from 'express'
import knex from '../database/connection'
const itemsRouter = Router()


itemsRouter.get('/', async (req, res) => {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://locahost:3000/uploads/${item.image}` 
        }
    })
    return res.json({items: serializedItems})
})
itemsRouter.get('/:id', async (req, res) => {
    const items = await knex('items').select('*').where('id', req.params.id)

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://locahost:3000/uploads/${item.image}` 
        }
    })
    return res.json({items: serializedItems})
})


export default itemsRouter