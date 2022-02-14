import React from 'react'
import style from './Cards.module.css'
import {BoardItemsType, CardType} from "../../../../../../../../types/types";
import Card from "./Card/Card";

const Cards: React.FC<OwnPropsType> = ({
                                           boardItems,
                                           boardId,
                                           index,
                                           addCard,

                                       }) => {
    return (
        <div className={style.container}>
            {
                boardItems[index].cards.map((el, cardIndex) => {
                    return <Card key={cardIndex} boardItems={boardItems} boardId={boardId} index={index}
                                 cardIndex={cardIndex} addCard={addCard} cardName={el}

                    />
                })
            }
        </div>
    )
}

type OwnPropsType = {
    boardItems: Array<BoardItemsType>,
    boardId: string,
    index: number,
    addCard: (id: string, boardItems: Array<BoardItemsType>) => void
}

export default Cards