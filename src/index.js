import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import * as serviceWorker from '@/serviceWorker';
import moment from 'moment';
import Page from '@/Page.jsx';
import rootReducer from '@/store/reducer.js';
import 'moment/locale/zh-cn';
import "antd/dist/antd.css";
import  '@/scss/global.scss'


moment.locale('zh-cn');

const store = createStore(rootReducer);


ReactDOM.render(<Page store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
