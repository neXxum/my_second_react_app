import React, {useEffect, useState} from 'react'
import style from './Card.module.css'
import {BoardItemsType, CardType} from "../../../../../../../../../types/types";

const Card: React.FC<OwnPropsType> = ({
                                          boardItems, boardId, index, cardName, cardIndex, addCard}) => {
    let updatedBoardItem = [...boardItems]

    let changeIsDone = () => {
        updatedBoardItem[index].cards[cardIndex].isDone = !updatedBoardItem[index].cards[cardIndex].isDone

        addCard(boardId, updatedBoardItem)
    }

    let newBoard = cardIndex > -1 && [...boardItems[index].cards].splice(cardIndex, 1)

    return (
        <div className={style.container}>
            <button onClick={changeIsDone}
                    className={updatedBoardItem[index].cards[cardIndex].isDone ? style.done : style.notDone}>
                <p className={style.card}>{cardName.cardName}</p> <p
                className={updatedBoardItem[index].cards[cardIndex].isDone ? style.true : style.false}>✓</p>
            </button>
        </div>
    )
}

type OwnPropsType = {
    cardName: CardType,
    boardItems: Array<BoardItemsType>,
    boardId: string,
    index: number,
    cardIndex: number,
    addCard: (id: string, boardItems: Array<BoardItemsType>) => void,


}

export default Card