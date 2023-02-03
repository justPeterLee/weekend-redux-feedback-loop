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
function* watcherSaga() {}




// ----- redux -----
// # reducers
// question answers
function feedbackAnswer(state = {}, action) {
  switch (action.type) {
    case "ADD_FEELING":
      return (state = { ...state, feeling: action.payload });
    case "ADD_UNDERSTAND":
      return (state = { ...state, understand: action.payload });
    case "ADD_SUPPORT":
      return (state = { ...state, support: action.payload });
    case "ADD_COMMENT":
      return (state = { ...state, comment: action.payload });
    default:
      return state;
  }
}



// store instance
const store = createStore(
  combineReducers({
    // reducers
    feedbackAnswer
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
