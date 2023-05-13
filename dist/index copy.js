/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-05-12 22:30:48
 * @LastEdi
/*
 * @Description:
 * @Author: Ran junlin
 * @Date: 2023-04-27 08:56:36
 * @LastEditTime: 2023-04-27 09:49:50
 * @LastEditors: Ran junlin
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
var rootEl = document.getElementById('root');
var root = ReactDOM.createRoot(rootEl);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
