import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Note from './Note'

export default class Tag extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @manyToMany(() => Note)
  public notes: ManyToMany<typeof Note>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
