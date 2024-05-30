"use client";
import React, { useState } from "react";
import "@/sass/__contactTouch.scss";
import touchbg from "@/assets/touchbg.png";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BOT_TOKEN = "7165736769:AAGYTqkorHkjWYhl1dFECngcg9JzQn4JPR4";
const USER_ID = "483634518";
let initialState = {
  name: "",
  email: "",
  area: "",
};
const Contact = ({ data, setData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    let text = `Buyurtma\n${data.name}\n${data.email}\n${data.area}`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${encodeURIComponent(
      text
    )}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.onload = function () {
      if (api.status >= 200 && api.status < 400) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    };
    api.onerror = function () {
      toast.error("Failed to send message. Please try again later.");
    };
    api.send();
    setData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="contactTouch__input">
      <label>
        <p>Fullname</p>
        <input
          value={data.name}
          onChange={(e) => setData((p) => ({ ...p, name: e.target.value }))}
          required
          type="text"
          placeholder="James Doe"
        />
      </label>
      <label>
        <p>Email</p>
        <input
          value={data.email}
          onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
          required
          type="email"
          placeholder="jamesdoe@gmail.com"
        />
      </label>
      <label>
        <p>Message</p>
        <textarea
          value={data.area}
          onChange={(e) => setData((p) => ({ ...p, area: e.target.value }))}
          placeholder="Type your message"
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

const ContactTouch = () => {
  const [data, setData] = useState(initialState);

  return (
    <div className="contactTouch__wrapper">
      <ToastContainer />
      <div className="container">
        <div className="contactTouch__section">
          <div className="contactTouch__adress">
            <Image src={touchbg} alt="Background Image" />
            <div>
              <h1>Get in touch</h1>
              <p>contact@e-comm.ng</p>
              <p>+234 4556 6665 34</p>
              <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
            </div>
          </div>
          <Contact data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
};

export default ContactTouch;
