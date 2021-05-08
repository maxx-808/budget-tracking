import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";

import Nav from "../components/Navbar/Nav/Nav";
import axios from "axios";

const Home = () => {
  const { userData } = useContext(UserContext);
  const personId = userData.user.user.id;
  const history = useHistory();
  const page = useState({ page: "home" });
  const [form, setForm] = useState();
  const [userTransactions, setUserTransactions] = useState([]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onValueChange = (e) => {
    e.preventDefault();
    const num = e.target.value;
    const cleanNum = parseFloat(num).toFixed(2);
    setForm({ ...form, [e.target.name]: cleanNum });
  };

  const clearForm = () => {
    document.querySelectorAll(".input").forEach((input) => (input.value = ""));
  };

  const transactions = async (req, res) => {
    let cancelToken = axios.CancelToken;
    let source = cancelToken.source();
    try {
      const all = await axios.get("/api/transactions/", {
        cancelToken: source.token,
        params: req,
      });
      return all.data.allUsersTrans;
    } catch (err) {
      axios.isCancel(err)
        ? console.log("Request cancelled")
        : console.log("transactions home", err);
    }
    return () => source.cancel();
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/transactions/new/", {
        data: form,
        id: personId,
      });
      clearForm();
      const reGetAll = await transactions({ id: personId });
      setUserTransactions(reGetAll);
    } catch (err) {
      console.log("submit home", err);
    }
  };

  useEffect(() => {
    if (!userData.user) {
      history.push("/login");
    }
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
    }
    let cancelToken = axios.CancelToken;
    let source = cancelToken.source();
    (async () => {
      try {
        const userRes = await axios.get("/api/users", {
          cancelToken: source.token,
          headers: { "x-auth-token": token },
        });
        const allData = await transactions({ id: userRes.data.user.id });
        setUserTransactions(allData);
      } catch (err) {
        axios.isCancel(err)
          ? console.log("Request cancelled")
          : console.log(err);
      }
    })();
    return () => source.cancel();
  }, [userData.user, history]);

  return (
    <div>
      <Nav page={page} />
      <form onSubmit={submit} className="newForm">
        <h1 style={{ paddingTop: "20px" }}>Add a New Transaction</h1>
        <label style={{ color: "black" }}>Name of Transaction</label>
        <input
          className="input"
          style={{ color: "black", borderBottom: "1px solid grey" }}
          onChange={onChange}
          type="text"
          name="title"
        />
        <label style={{ color: "black" }}>Description</label>
        <input
          className="input"
          style={{ color: "black", borderBottom: "1px solid grey" }}
          onChange={onChange}
          type="text"
          name="description"
        />
        <label style={{ color: "black" }}>value</label>
        <input
          className="input"
          style={{ color: "black", borderBottom: "1px solid grey" }}
          onChange={onValueChange}
          type="number"
          name="value"
          step="0.00"
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
        />

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

export default Home;
