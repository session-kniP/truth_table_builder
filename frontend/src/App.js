import React, { useState, useCallback, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as BS from 'react-bootstrap';
import ApplicationContext from './context/ApplicationContext';
import { Alert } from './components/toasts/Alert';

import { useRoutes } from './routes';
import { NavBar } from './components/NavBar';
import { useTimer } from './hooks/timer.hook';
import './styles/index.css';

function App() {
    const [toasts, setToasts] = useState([]);
    const routes = useRoutes();

    const removeToast = (index) => {};

    const showToast = ({ type, text }) => {
        console.log(toasts.length);

        setToasts([
            ...toasts,
            <Alert key={toasts.length} type={type} text={text} removeToast={removeToast} />,
        ]);
    };

    return (
        <div className="container col-12 justify-content-center">
            <ApplicationContext.Provider value={{ showToast }}>
                <NavBar />
                <div className="row pt-3 m-0">
                    <div className="col-xl-2 px-0"></div>

                    <div className="col-xl-8">{routes}</div>
                    <div className="col-xl-2 px-0">{toasts.map((t) => t)}</div>
                </div>
            </ApplicationContext.Provider>
        </div>
    );
}

export default App;
