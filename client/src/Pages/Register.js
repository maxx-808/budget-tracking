import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import userContext from "../Context/UserContext";
import LandNav from "../components/Navbar/LandNav/LandNav.js";

const Register = () => {
  const [form, setForm] = useState();
  const { userData, setUserData } = useContext(userContext);
  const history = useHistory();
  const page = useState({ page: "register" });
  const location = window.location.origin;

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    const passInput = document.getElementById("inputPass").value;
    const passCheckInput = document.getElementById("inputCheck").value;
    const passErr = document.getElementById("passCheck");
    if (passInput !== passCheckInput) {
      passErr.classList.remove("hidden");
    }
    if (passInput === passCheckInput) {
      passErr.classList.add("hidden");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/users/register", {
        user: form,
        location: location,
      });
    } catch (err) {
      console.log(err.response);

      const regErr = document.getElementById("registerErr");
      regErr.innerHTML = err.response.data.msg;
      regErr.classList.remove("hidden");
      regErr.classList.add("err");
    }
  };

  useEffect(() => {
    if (userData.user) history.push("/");
  }, [userData.user, history]);

  return (
    <div className="page">
      <form onSubmit={submit} className="formInputs">
        <h1 style={{ paddingTop: "20px" }}>SignUp</h1>
        <div className="form-group">
          <label style={{ color: "black" }}>First Name</label>
          <input
            style={{ color: "black", borderBottom: "1px solid grey" }}
            onChange={onChange}
            type="text"
            name="fName"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label style={{ color: "black" }}>Last Name</label>
          <input
            style={{ color: "black", borderBottom: "1px solid grey" }}
            onChange={onChange}
            type="text"
            name="lName"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p id="registerErr" className="hidden"></p>
          <label style={{ color: "black" }}>Email</label>
          <input
            style={{ color: "black", borderBottom: "1px solid grey" }}
            onChange={onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label style={{ color: "black" }}>Password</label>
          <input
            style={{ color: "black", borderBottom: "1px solid grey" }}
            onChange={onChange}
            type="password"
            name="password"
            className="form-control"
            id="inputPass"
          />
        </div>
        <div className="form-group">
          <label style={{ color: "black" }}>Password Check</label>
          <input
            style={{ color: "black", borderBottom: "1px solid grey" }}
            onChange={onChange}
            type="password"
            name="passwordCheck"
            className="form-control"
            id="inputCheck"
          />
          <p className="hidden err" id="passCheck">
            Password doesn't Match
          </p>
        </div>

        <input
          style={{
            marginTop: "20px",
            backgroundColor: "lightGrey",
            borderRadius: "10px",
          }}
          type="submit"
          name="Register"
        />
      </form>
    </div>
  );
};

export default Register;
