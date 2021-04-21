import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext.js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import userContext from "../Context/UserContext.js";

const Register = () => {
  const [form, setForm] = useState();
  const { userData, setUserData } = useContext(userContext);
  const history = useHistory();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/users/register", form);
      const { data } = await axios.post("api/users/login", {
        email: form.email,
        password: form.password,
      });

      setUserData({
        token: data.token,
        user: data.user,
      });

      localStorage.setItem("auth-token", data.token);

      history.push("/");
    } catch (err) {
      console.log(err.response);

      const regErr = document.getElementById("registerErr");
      regErr.innerHTML = err.response.data.msg;
      regErr.classList.remove("hidden");
      regErr.classList.add("err");
    }

    useEffect(() => {
      if (userData.user) history.push("/");
    }, [userData.user, history]);
  };

  const passChange = (e) => {
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
};
