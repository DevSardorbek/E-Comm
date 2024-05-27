import Link from "next/link";
import React from "react";
import "@/sass/__contact.scss";
import ContactTouch from "@/components/contactTouch/ContactTouch";
import Search from "@/components/search/Search";

const Contact = () => {
  return (
    <>
      <div className="contact__wrapper">
        <div className="container">
          <div className="contact__line">
            <Link href={"/"}>Home</Link> / <p>Contact Us</p>
          </div>
          <div className="contact__section"></div>
        </div>
      </div>
      <ContactTouch />
      <Search />
    </>
  );
};

export default Contact;
