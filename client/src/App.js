import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./pages/register";

import userContext from "./context/userContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <userContext.Provider value={{ userData, setUserdata }}>
          <Switch>
            <Route exact path="register" component={Register} />
          </Switch>
        </userContext.Provider>
      </Router>
    </div>
  );
}

export default App;
