import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Confirm = async (props) => {
  if (props.match.path === "/confirm/:confirmationCode") {
    const data = props.match.params.confirmationCode;
    const verifyUser = async (confirmCode) => {
      try {
        const verify = await axios.post(`/api/auth/confirm/${confirmCode}`);
        console.log("verify post call", verify);
        return verify.data;
      } catch (err) {
        console.log("verify user err: ", err);
      }
    };
    verifyUser(data);
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>Account confirmed!</strong>
        </h3>
      </header>
      <Link to={"/login"}>Please Login</Link>
    </div>
  );
};

export default Confirm;
