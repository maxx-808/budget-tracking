import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

import userContext from "./Context/UserContext";
import "./App.css";
import Login from "./Pages/Login";
import Confirm from "./Pages/Confirm";
import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";

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

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <Router>
        <userContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/confirm/:confirmationCode" component={Confirm} />

            <Route path="/contact" component={Contact} />
          </Switch>
        </userContext.Provider>
      </Router>
    </div>
  );
}

export default App;
