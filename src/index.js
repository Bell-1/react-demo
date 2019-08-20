import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './store/reducer.js';
import * as serviceWorker from './serviceWorker';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "antd/dist/antd.css";
import './scss/app.scss'
import App from './App'

moment.locale('zh-cn');

const store = createStore(rootReducer);

const render = () => ReactDOM.render(
    <App store={store}></App>,
    document.getElementById('root')
);
render();


store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

