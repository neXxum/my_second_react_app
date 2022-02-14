import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './App.css';
import store from "./redux/store";
import MainContainer from "./components/MainContainer/MainContainer";

const App: React.FC = () => {
    return (
        <div className='App'>
            <MainContainer/>
        </div>
    )
}

const ReactApp2: React.FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default ReactApp2;
