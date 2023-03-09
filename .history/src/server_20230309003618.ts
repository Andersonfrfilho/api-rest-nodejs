import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', () => {
 cons transaction = await knex('transactions').insert({
   id: crypto.randomUUID(),
   title:""
 })
  console.log(test)
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Http Server Running')
  })
