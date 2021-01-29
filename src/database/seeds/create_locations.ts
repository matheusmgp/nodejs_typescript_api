import Knex from 'knex'

export async function seed(knex: Knex) {

    await knex('locations').insert([
        {
            name: 'Fortaleza',
            image: 'fortaleza.png',
            email: 'fortaleza@hotmail.com',
            whatsapp: '32323232',
            latitude: 12345678,
            longetude: 12345678,
            cidade: 'Fortaleza',
            estado: 'Ceará'
        },
        {
            name: 'Fortaleza',
            image: 'fortaleza.png',
            email: 'fortaleza@hotmail.com',
            whatsapp: '32323232',
            latitude: 12345678,
            longetude: 12345678,
            cidade: 'Fortaleza',
            estado: 'Ceará'
        },
        {
            name: 'Fortaleza',
            image: 'fortaleza.png',
            email: 'fortaleza@hotmail.com',
            whatsapp: '32323232',
            latitude: 12345678,
            longetude: 12345678,
            cidade: 'Fortaleza',
            estado: 'Ceará'
        },
        {
            name: 'Fortaleza',
            image: 'fortaleza.png',
            email: 'fortaleza@hotmail.com',
            whatsapp: '32323232',
            latitude: 12345678,
            longetude: 12345678,
            cidade: 'Fortaleza',
            estado: 'Ceará'
        },
    ])
}