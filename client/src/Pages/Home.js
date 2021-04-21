import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";

const Home = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/register");
  }, [userData.user, history]);

  return (
    <div>
      <h1>Hello this is Home!</h1>
    </div>
  );
};

export default Home;
