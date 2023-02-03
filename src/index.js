import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';

// saga 
import createSagaMiddleware from '@redux-saga/core';
import {takeEvery, put} from 'redux-saga/effects'

//axios
import axios from 'axios';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
