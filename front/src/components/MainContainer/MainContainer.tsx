import React from 'react'
import style from './MainContainer.module.css'
import {Route, Routes, NavLink} from "react-router-dom";
import BoardsContainer from "./BoardsContainer/BoardsContainer";
import Lists from "./BoardsContainer/Boards/Lists/Lists";

const MainContainer: React.FC = () => {

    return (
        <div className={style.mainContainer}>
            <Routes>

                <Route path='/'
                       element={<BoardsContainer/>}/>
                <Route path='/lists'
                       element={<Lists/>}/>
            </Routes>
        </div>
    )
}

export default MainContainer