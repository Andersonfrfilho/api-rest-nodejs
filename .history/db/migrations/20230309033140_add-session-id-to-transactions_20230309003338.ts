import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  table.uuid('session_id').after('id').index()
}

export async function down(knex: Knex): Promise<void> {}
