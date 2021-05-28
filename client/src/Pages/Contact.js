import React, { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import { useHistory } from "react-router-dom";
import LandNav from "../components/Navbar/LandNav/LandNav";
import "../App.css";
import axios from "axios";

const Contact = () => {
  const page = useState({ page: "contact" });
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, req, res) => {
    e.preventDefault();

    try {
      await axios.post("/api/send/msg", contact);
      console.log("message sent");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page">
      <div className="left-wording">
        <h1>Contact the developer</h1>
        <h6>
          If you have any questions or concerns feel free to send a message to
          us. Also if you have any comments or suggestions we welcome those as
          well. We love to hear back from our users and look at ways to improve
          our application.
        </h6>
        <h6>
          Please specify in the first sentence the topic of which your message
          will be about, for example: "Problems logging in", "Review of
          application", etc. This will help to better attend to messages sent
          and to better log all of the messages.
        </h6>
      </div>
      <form className="formInputs" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            name="message"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
