import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

import userContext from "./Context/UserContext";
import "./App.css";
import Login from "./Pages/Login";
import Confirm from "./Pages/Confirm";

function App() {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });

  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    }
    try {
      const userRes = await axios.get("/api/users", {
        headers: { "x-auth-token": token },
      });
      setUserData({ token, user: userRes.data });
    } catch (err) {
      console.log("User must login");
    }
  };

  const logout = () => {
    setUserData({ token: undefined, user: undefined });
    localStorage.setItem("auth-token", "");
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <userContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/confirm/:confirmationCode"
              component={Confirm}
            />
          </Switch>
        </userContext.Provider>
      </Router>
    </div>
  );
}

export default App;
