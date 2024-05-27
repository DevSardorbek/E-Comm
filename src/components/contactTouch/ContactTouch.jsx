import React from "react";
import "@/sass/__contactTouch.scss";
import touchbg from "@/assets/touchbg.png";
import Image from "next/image";
const ContactTouch = () => {
  return (
    <div className="contactTouch__wrapper">
      <div className="container">
        <div className="contactTouch__section">
          <div className="contactTouch__adress">
            <Image src={touchbg} />
            <div>
              <h1>Get in touch</h1>
              <p>contact@e-comm.ng</p>
              <p>+234 4556 6665 34</p>
              <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
            </div>
          </div>
          <div className="contactTouch__input">
            <label>
              <p>Fullname</p>
              <input type="text" placeholder="James Doe" />
            </label>
            <label>
              <p>Email</p>
              <input type="email" placeholder="jamesdoe@gmail.com" />
            </label>
            <label>
              <p>Message</p>
              <textarea
                name=""
                id=""
                placeholder="Type your message"
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTouch;
