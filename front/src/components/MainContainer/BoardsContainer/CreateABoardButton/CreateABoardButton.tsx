import React from 'react'
import style from './CreateABoardButton.module.css'
import Boards from "../Boards/Boards";
import {BoardsType} from "../../../../types/types";

const CreateABoardButton: React.FC<OwnProps> = ({activatedEditMode, boards}) => {
    return (
        <div className={style.createButton}>
            <button onClick={activatedEditMode} className={style.btn}>Create a new board...</button>
        </div>

    )
}

type OwnProps = {
    activatedEditMode: () => void,
    boards: Array<BoardsType>
}

export default CreateABoardButton