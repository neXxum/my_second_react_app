import React from 'react'
import style from './BoardLists.module.css'
import List from "./List/List";
import {BoardItemsType} from "../../../../../../types/types";
import {AppStateType} from "../../../../../../redux/store";
import AddAList from "../AddAList/AddAList";

const BoardLists: React.FC<PropsType> = ({boardItems, addCard, boardId, addList}) => {



    return (
        <div className={style.container}>
            {
                boardItems.map((elem, index) => {
                    return <List key={index} boardItems={boardItems} index={index} boardId={boardId} addCard={addCard} removeList={addList} elem={elem}/>
                })
            }
            <AddAList boardItems={boardItems} boardId={boardId} addList={addList}/>
        </div>
    )
}

type PropsType = OwnPropsType

type OwnPropsType = {
    boardItems: Array<BoardItemsType>,
    boardId: string,
    addCard: (id: string, boardItems: Array<BoardItemsType>) => void,
    addList: (id: string, boardItems: Array<BoardItemsType>) => void
}

export default BoardLists