import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class DailyNote extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public date: Date

  @column()
  public startTime: string

  @column()
  public workFromHome: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
