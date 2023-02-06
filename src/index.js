import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

// redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
// saga
import createSagaMiddleware from "@redux-saga/core";
import { takeEvery, put } from "redux-saga/effects";

//axios
import axios from "axios";

//----- saga ------
const sagaMiddleware = createSagaMiddleware();

// saga generator function
function* watcherSaga(){
  yield takeEvery('SEND_FEEDBACK', postFeedback);
}

// post request function 
function* postFeedback(action){
  try{
    yield axios.post('/feedback', action.payload)
    yield put({type:'FEEDBACK_SUCCESS'})
  }catch(error){
    console.log('error with POST for feedback, ', error)
    yield put({type:'FEEDBACK_FAILED'})
  }
}
// ----- redux -----
// # reducers
// question answers
function feedbackAnswer(state = {}, action) {
  switch (action.type) {
    case "ADD_FEELING":
      return (state = { ...state, feeling: action.payload });
    case "ADD_UNDERSTAND":
      return (state = { ...state, understanding: action.payload });
    case "ADD_SUPPORT":
      return (state = { ...state, support: action.payload });
    case "ADD_COMMENT":
      return (state = { ...state, comments: action.payload });
    case "CLEAR":
      return (state = {});
    default:
      return state;
  }
}

// post request validation 
function postMade(state = false, action){
  switch (action.type){
    case "FEEDBACK_SUCCESS":
      return state = true;
    case "FEEDBACK_FAILED":
      return state = false;
    default:
      return state = false;
  }
}


// store instance
const store = createStore(
  combineReducers({
    // reducers
    feedbackAnswer,
    postMade,

  }),

  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
