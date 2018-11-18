import ICard from './ICard'
import IItem from './IItem'

export default interface IBoard extends IItem {
    id?: number
    name: string
    cardItems: ICard[]
}