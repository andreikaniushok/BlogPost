import { IDate } from './Date'
import { ITime } from './Time'
import { IUser } from './User'

export interface IComment {
  postId: string
  id: string
  title: string
  content: string
  picture: string
  owner: IUser
  date: IDate
  time: ITime
  isShow?: boolean
}
