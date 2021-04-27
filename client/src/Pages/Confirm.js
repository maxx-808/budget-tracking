import React from "react";
import VerifyUser from "../components/Services/ConfirmAuth";
import { Link } from "react-router-dom";

const Confirm = (props) => {
  if (props.match.path === "/confirm/:confirmationCode") {
    VerifyUser(props.match.params.confirmationCode);
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
