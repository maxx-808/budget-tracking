import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Confirm = (props) => {
  if (props.match.path === "/confirm/:confirmationCode") {
    const data = props.match.params.confirmationCode;
    const verifyUser = async (confirmCode) => {
      let cancelToken = axios.CancelToken;
      let source = cancelToken.source();
      try {
        const verify = await axios.post(`/api/auth/confirm/${confirmCode}`, {
          cancelToken: source.token,
        });
        console.log("verify post call", verify);
        return verify.data;
      } catch (err) {
        axios.isCancel(err)
          ? console.log("Request cancelled")
          : console.log("verify user err: ", err);
      }
      return () => source.cancel();
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
