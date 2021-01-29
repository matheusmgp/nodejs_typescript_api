import Knex from 'knex'

export async function seed(knex: Knex) {

    await knex('items').insert([
        {
            title: 'Impressora',
            image: 'impressora.jpg'
        },
        {
            title: 'Notebook',
            image: 'notebook.jpg'
        },
        {
            title: 'Teclado',
            image: 'teclado.jpg'
        }
    ])
}