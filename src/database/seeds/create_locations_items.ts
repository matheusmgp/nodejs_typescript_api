import Knex from 'knex'

export async function seed(knex: Knex) {

    await knex('location_items').insert([
        {
            location_id: 1,
            item_id: 1
        },
        {
            location_id: 2,
            item_id: 2
        },
        {
            location_id: 3,
            item_id: 3
        },
        {
            location_id: 4,
            item_id: 4
        },
    ])
}