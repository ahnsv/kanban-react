import IBoard from './IBoard'
import IItem from './IItem'

export default interface IProject extends IItem {
    id?: number
    name: string
    boardItems: IBoard[]
}