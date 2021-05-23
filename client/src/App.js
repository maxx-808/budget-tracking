import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import userContext from "./Context/UserContext";
import "./App.css";

import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Confirm from "./Pages/Confirm";
import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";
import AllTrans from "./Pages/AllTrans";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Navbar/Nav/Nav";
import LandNav from "./components/Navbar/LandNav/LandNav";
import AllTransTitle from "./Pages/AllTrans.title";
import AllTransValue from "./Pages/AllTrans.val";

function App() {
  const [userData, setUserData] = useState({
    user: undefined,
    token: undefined,
  });
  const page = window.location.pathname;
  console.log(page);

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
      {!userData.user ? <LandNav page={page} /> : <Nav page={page} />}
      <Router>
        <userContext.Provider value={{ userData, setUserData }}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/confirm/:confirmationCode" component={Confirm} />

            <Route path="/transactions" component={AllTrans} />
            <Route path="/transactions_title" component={AllTransTitle} />
            <Route path="/transactions_value" component={AllTransValue} />

            <Route path="/contact" component={Contact} />
          </Switch>
        </userContext.Provider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
