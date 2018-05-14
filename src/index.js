import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Main from './main'
import {BrowserRouter as Router,Route} from "react-router-dom";
import * as auth from './auth';
import * as fire from './components/fire';

export {
  auth,
  fire,
};

AppReactDOM.render(
   <App/>,document.getElementById('app')
);

