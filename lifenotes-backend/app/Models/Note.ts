import { DateTime } from 'luxon'
import { BaseModel, HasMany, ManyToMany, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Comment from './Comment'
import Tag from './Tag'

export default class Note extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string | null

  @column()
  public content: string

  @column()
  public userId: number

  @column()
  public dailyNoteId: number | null

  @hasMany(() => Comment)
  public notes: HasMany<typeof Comment>

  @manyToMany(() => Tag)
  public tags: ManyToMany<typeof Tag>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
