import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('trans')
}

export async function down(knex: Knex): Promise<void> {}
