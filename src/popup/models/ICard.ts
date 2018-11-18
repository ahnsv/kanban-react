import IItem from './IItem'

export default interface ICard extends IItem {
    id: number
    title: string
    tag: string[]
    description: string
    dueDate: Date
    Partner: string[]
}