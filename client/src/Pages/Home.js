import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import Nav from "../components/Navbar/Nav/Nav";

const Home = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const page = useState({ page: "home" });
  const userId = userData.user.user.id;

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);

  return (
    <div>
      <Nav page={page} />
      <h1>Hello this is Home!</h1>
    </div>
  );
};

export default Home;
