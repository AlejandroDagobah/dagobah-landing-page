import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'atropos/css'
import ReactGA from 'react-ga'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

ReactGA.initialize('G-26V5T383B8')

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
