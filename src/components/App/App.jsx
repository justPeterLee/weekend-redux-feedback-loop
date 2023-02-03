import React from "react";
import axios from "axios";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
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
        <h1>hello</h1>
      </Route>
    </Router>
  );
}

export default App;
