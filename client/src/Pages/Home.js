import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import GetTrans from "../components/Services/GetTrans";
import NewTrans from "../components/Services/NewTrans";
import Nav from "../components/Navbar/Nav/Nav";

const Home = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const page = useState({ page: "home" });
  const [form, setForm] = useState();
  const [allData, setAllData] = useState();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const transactions = async (req, res) => {
    try {
      GetTrans(req.body);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const amount = parseInt(form.value);
      setForm({ ...form, value: amount });
      const data = {
        title: form.title,
        description: form.description,
        value: form.value,
        id: userData.user.user.id,
      };
      await setAllData(data);
      console.log(allData);
      await NewTrans(allData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!userData.user) history.push("/login");
    // else {
    //   transactions(userData.user.user.id);
    // }
  }, [userData.user, history]);

  return (
    <div>
      <Nav page={page} />
      <form onSubmit={submit} className="newForm">
        <h1 style={{ paddingTop: "20px" }}>Add a New Transaction</h1>
        <label style={{ color: "black" }}>Name of Transaction</label>
        <input
          style={{ color: "black", borderBottom: "1px solid grey" }}
          onChange={onChange}
          type="text"
          name="title"
        />
        <label style={{ color: "black" }}>Description</label>
        <input
          style={{ color: "black", borderBottom: "1px solid grey" }}
          onChange={onChange}
          type="text"
          name="description"
        />
        <label style={{ color: "black" }}>value</label>
        <input
          style={{ color: "black", borderBottom: "1px solid grey" }}
          onChange={onChange}
          type="number"
          name="value"
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
