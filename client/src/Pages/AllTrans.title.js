import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import axios from "axios";

const AllTransTitle = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const [userTransactions, setUserTransactions] = useState([]);
  //   const byVal = userTransactions.sort((a, b) => {
  //     return a.title > b.title ? 1 : -1;
  //   });
  console.log("hi");
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

  useEffect(() => {
    if (!userData) {
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
        const t = allData.sort((a, b) => (a.title > b.title ? 1 : -1));
        setUserTransactions(t);
      } catch (err) {
        axios.isCancel(err)
          ? console.log("Request cancelled")
          : console.log(err);
      }
    })();
    return () => source.cancel();
  }, [userData.user, history]);

  return (
    <div className="page">
      <div className="nav-item dropdown">
        <span
          className="nav-link dropdown-toggle"
          id="dropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter
        </span>
        <div
          className="dropdown-menu"
          id="filterDropDown"
          aria-labelledby="navbarDropdown"
        >
          <a className="dropdown-item" href="/transactions_value">
            By Value
          </a>
          <a className="dropdown-item" href="/transactions_title">
            By Title
          </a>
          <a
            className="dropdown-item"
            href="https://www.linkedin.com/in/max-higa-2460351b4/"
            target="blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Transaction</th>
            <th id="descr">Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {userTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.date.slice(0, 10)}</td>
              <td>
                <strong>$</strong> {transaction.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTransTitle;
