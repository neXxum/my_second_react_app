import React, {useEffect, useState} from 'react'
import style from './BoardsContainer.module.css'
import CreateABoardButton from "./CreateABoardButton/CreateABoardButton";
import CreateABoardForm from "./CreateABoardForm/CreateABoardForm";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {BoardsType} from "../../../types/types";
import {getBoards} from "../../../redux/boards-reducer";
import Boards from "./Boards/Boards";

const BoardsContainer: React.FC<PropsType> = ({boards, getBoards}) => {
    const [editMode, setEditMode] = useState(false)


    React.useEffect(() => {
        getBoards()
    }, [])
    const activatedEditMode = () => {
        setEditMode(true)
    }

    const deactivatedEditMode = () => {
        setEditMode(false)
    }

    console.log(boards)
    return (
        <div className={style.boardsContainer}>
            {
                editMode ?
                    <CreateABoardForm deactivatedEditMode={deactivatedEditMode}/> :
                    <CreateABoardButton activatedEditMode={activatedEditMode} boards={boards}/>
            }

            {
                boards.length > 0 && boards.map((board, index) => {
                    return <Boards boardId={board._id} boardName={board.name} key={index} index={index}/>
                })
            }
        </div>
    )
}

type PropsType = MapPropsType & DispatchPropsType

type MapPropsType = {
    boards: Array<BoardsType>
}

type DispatchPropsType = {
    getBoards: () => void
}

const mapStateToProps = (state: AppStateType) => ({
    boards: state.boardsReducer.boards
})

export default connect(mapStateToProps, {getBoards})(BoardsContainer)