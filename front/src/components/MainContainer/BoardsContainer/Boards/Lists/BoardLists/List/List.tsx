import React, {useState} from 'react'
import style from './List.module.css'
import {BoardItemsType, CardType} from "../../../../../../../types/types";
import AddACard from "./AddACard/AddACard";
import Cards from "./Cards/Cards";

const List: React.FC<PropsType> = ({boardItems, index, boardId, addCard, removeList, elem}) => {

    const deleteList = () => {
        let newItems = [...boardItems]
        if (index > -1) {
            newItems.splice(index, 1)
        }

        removeList(boardId, newItems)
    }

    return (
        <div
            className={style.container}
        >
            <div className={style.listTitle}>
                <h3>{boardItems[index].list}</h3>
                <button onClick={deleteList}>✖</button>
            </div>
            <div className={style.listContent}>
                <AddACard boardItems={boardItems} boardId={boardId} listName={boardItems[index].list} index={index}
                          addCard={addCard}/>
                <Cards boardItems={boardItems} boardId={boardId} index={index} addCard={addCard}/>
                <div className={style.footer}></div>
            </div>
        </div>
    )
}

type PropsType = OwnPropsType

type OwnPropsType = {
    boardItems: Array<BoardItemsType>
    index: number,
    boardId: string,
    addCard: (id: string, boardItems: Array<BoardItemsType>) => void,
    removeList: (id: string, boardItems: Array<BoardItemsType>) => void,
    elem: BoardItemsType
}

export default List