import React from 'react'
import style from './BoardTitle.module.css'
import {NavLink} from "react-router-dom";

const BoardTitle: React.FC<OwnProps> = ({boardName}) => {
    return (
        <div className={style.title}>
            <div>
                <h1>{boardName}</h1>
            </div>
            <NavLink to={'/'} className={style.back}>Back to boards</NavLink>
        </div>
    )
}

type OwnProps = {
    boardName: string
}

export default BoardTitle