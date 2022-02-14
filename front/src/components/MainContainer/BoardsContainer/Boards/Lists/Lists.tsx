import React from 'react'
import style from './Lists.module.css'
import {AppStateType} from "../../../../../redux/store";
import {connect} from "react-redux";
import {BoardItemsType, BoardsType} from "../../../../../types/types";
import {Navigate} from 'react-router-dom';
import BoardTitle from "./BoardTitle/BoardTitle";
import BoardLists from "./BoardLists/BoardLists";
import AddAList from "./AddAList/AddAList";
import {addCard, addList} from "../../../../../redux/boards-reducer";


const Lists: React.FC<PropsType> = ({boards, boardNumber, addList, addCard}) => {

    if (boardNumber === undefined) return <Navigate to='/'/>

    console.log(boards[boardNumber])

    return (
        <div>
            <BoardTitle boardName={boards[boardNumber].name}/>
            <div className={style.container}>
                <BoardLists boardItems={boards[boardNumber].boardItems} boardId={boards[boardNumber]._id} addCard={addCard} addList={addList}/>
            </div>
        </div>
    )
}

type PropsType = MapToPropsType & DispatchPropsType

type MapToPropsType = {
    boards: Array<BoardsType>,
    boardNumber: number | undefined
}

type DispatchPropsType = {
    addList: (id: string, boardItems: Array<BoardItemsType>) => void
    addCard: (id: string, boardItems: Array<BoardItemsType>) => void
}

const mapStateToProps = (state: AppStateType) => ({
    boards: state.boardsReducer.boards,
    boardNumber: state.boardsReducer.boardNumber
})

export default connect(mapStateToProps, {
    addList: addList,
    addCard: addCard
})(Lists)