import React from "react";
import axios from "axios";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

// imported components 
import CreateFeedback from "../CreateFeedback/CreateFeedback";
import Feeling from "../Questions/Feeling/Feeling";
import Understanding from "../Questions/Understanding/Understanding";
import Support from "../Questions/Support/Support";
import Comments from "../Questions/Comments/Comments";

import Modal from "../Modal/Modal";
import Review from "../Review/Review";
import Admin from "../Admin/Admin";

import { useSelector } from "react-redux";

function App() {
  const pageCondition = useSelector(store => store.postMade)
  return (
    <Router>
      {/* global header for a pages/routes */}
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>

      {/* create router routes */}
      <Route path='/' exact>
        <CreateFeedback />
      </Route>

      {/* Feeedback Question */}
      <Route path='/feedback/feeling' exact>
        <Feeling />
      </Route>

      <Route path='/feedback/understand' exact>
        <Understanding />
      </Route>

      <Route path='/feedback/support' exact>
        <Support />
      </Route>

      <Route path='/feedback/comments' exact>
        <Comments />
      </Route>


      {/* Review */}
      <Route path='/feedback/review' exact>
        <Review />
      </Route>

      {/* Manage Feedback */}
      <Route path='/feedback/admin' exact>
        <Admin />
      </Route>

      {pageCondition && (<Route path='/feedback/modal'>
        <Modal />
      </Route>)}
      
    </Router>
  );
}

export default App;
