import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// saga 
import createSagaMiddleware from '@redux-saga/core';
import {takeEvery, put} from 'redux-saga/effects'

//axios
import axios from 'axios';



//----- saga ------
const sagaMiddleware = createSagaMiddleware();

// saga generator function 
function* watcherSaga(){

}


// ----- redux -----

// store instance 
const store = createStore(
    combineReducers({
        // reducers 
    }),

    applyMiddleware(logger,sagaMiddleware)
)

sagaMiddleware.run(watcherSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
