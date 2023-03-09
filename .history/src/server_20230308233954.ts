import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', () => {
  const test = knex('sqlite_schema')
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http Server Running')
  })
