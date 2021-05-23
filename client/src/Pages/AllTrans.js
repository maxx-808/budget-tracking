import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import axios from "axios";

const AllTrans = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const [userTransactions, setUserTransactions] = useState();
  const personId = localStorage.getItem("id");

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
};
