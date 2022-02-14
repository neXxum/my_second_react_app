export type CardType = {
    cardName: string,
    isDone: boolean,
    _id?: string
}

export type BoardItemsType = {
    list: string,
    cards: Array<CardType>
    _id?: string
}

export type BoardsType = {
    _id: string,
    name: string,
    boardItems: Array<BoardItemsType>,
    __v: number
}