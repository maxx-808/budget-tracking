import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import axios from "axios";

const Home = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const [form, setForm] = useState();
  // const [userTransactions, setUserTransactions] = useState([]);
  const personId = localStorage.getItem("id");

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

  // const transactions = async (req, res) => {
  //   let cancelToken = axios.CancelToken;
  //   let source = cancelToken.source();
  //   try {
  //     const all = await axios.get("/api/transactions/", {
  //       cancelToken: source.token,
  //       params: req,
  //     });
  //     return all.data.allUsersTrans;
  //   } catch (err) {
  //     axios.isCancel(err)
  //       ? console.log("Request cancelled")
  //       : console.log("transactions home", err);
  //   }
  //   return () => source.cancel();
  // };

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/transactions/new/", {
        data: form,
        id: personId,
      });
      clearForm();
      // const reGetAll = await transactions({ id: personId });
      // setUserTransactions(reGetAll);
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
    // let cancelToken = axios.CancelToken;
    // let source = cancelToken.source();
    // (async () => {
    //   try {
    //     const userRes = await axios.get("/api/users", {
    //       cancelToken: source.token,
    //       headers: { "x-auth-token": token },
    //     });
    //     const allData = await transactions({ id: userRes.data.user.id });
    //     setUserTransactions(allData);
    //   } catch (err) {
    //     axios.isCancel(err)
    //       ? console.log("Request cancelled")
    //       : console.log(err);
    //   }
    // })();
    // return () => source.cancel();
  }, [userData.user, history]);

  return (
    <div className="page">
      <form onSubmit={submit} className="newForm">
        <div className="left-wording">
          <h1>Add a New Transaction</h1>
          <h6>
            Enter information about the transaction. Provide a brief name of
            transaction (ex. car payment, mcdonalds, etc.)
          </h6>
          <h6>
            When adding the transaction, it will be added with the same date as
            the day you enter it in
          </h6>
        </div>

        <label className="newTransLabel">Name of Transaction</label>
        <input
          className="input"
          id="transNameInput"
          style={{ color: "black", borderBottom: "1px solid grey" }}
          onChange={onChange}
          type="text"
          name="title"
        />
        <label className="newTransLabel">value</label>
        <input
          className="input"
          id="valueInput"
          style={{ color: "black", borderBottom: "1px solid grey" }}
          onChange={onValueChange}
          type="number"
          name="value"
          step="0.01"
          onKeyDown={(evt) =>
            ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
          }
        />
        <label className="newTransLabel">Description</label>
        <textarea
          className="input"
          id="descriptionInput"
          style={{ color: "black", borderBottom: "1px solid grey" }}
          onChange={onChange}
          type="text"
          name="description"
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
      {/* <div>
        {userTransactions.map((transaction, index) => (
          <div key={index}>
            <h4>{transaction.title}</h4>
            <p>{transaction.description}</p>
            <p>{transaction.date.slice(0, 10)}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
