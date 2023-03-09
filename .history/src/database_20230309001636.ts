import { knex as setupKnex, Knex } from 'knex'

export const config = {
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
