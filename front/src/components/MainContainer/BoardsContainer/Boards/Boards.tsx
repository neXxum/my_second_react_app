import React from 'react'
import style from './Boards.module.css'
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/store";
import {actions, deleteBoard} from "../../../../redux/boards-reducer";
import {NavLink} from "react-router-dom";

type PropsType = OwnProps & MapPropsType & DispatchPropsType

const Boards: React.FC<PropsType> = ({boardName, index, setBoardNumber, deleteBoard, boardId}) => {

    const removeBoard = () => {
        deleteBoard(boardId)
    }

    return (
        <div className={style.board}>
            <NavLink to={'/lists'} onClick={() => setBoardNumber(index)} className={style.navLink}>{boardName}</NavLink>
            <button onClick={removeBoard}>✖</button>
        </div>
    )
}

type OwnProps = {
    boardName: string,
    index: number,
    boardId: string
}

type MapPropsType = {

}

type DispatchPropsType = {
    setBoardNumber: (boardNumber: number) => void,
    deleteBoard: (id: string) => void
}

let mapStateToProps = (state: AppStateType) => ({

})

export default connect(mapStateToProps, {
    setBoardNumber: actions.setBoardNumber,
    deleteBoard: deleteBoard
})(Boards)