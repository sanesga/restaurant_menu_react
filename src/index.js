import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//añadimos el import del react-router
import  {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
    //añadimos el Router
    <Router>
        <App/>
    </Router>
,document.getElementById('root'));
