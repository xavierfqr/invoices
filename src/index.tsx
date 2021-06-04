import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { ThemeProvider } from 'styled-components';
//import Dark from './constants/Themes/Dark';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
