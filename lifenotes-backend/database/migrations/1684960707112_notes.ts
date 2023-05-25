import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'notes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').nullable()
      table.text('content')
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')
      table
        .integer('daily_notes_id')
        .unsigned()
        .references('daily_notes.id')
        .onDelete('CASCADE')
        .nullable()
      table.integer('topics_id').unsigned().references('topics.id').onDelete('CASCADE').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
