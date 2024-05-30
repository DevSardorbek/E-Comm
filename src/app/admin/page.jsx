import Link from "next/link";
import React from "react";
import "@/sass/__admin.scss";
const Admin = () => {
  return (
    <div className="admin__wrapper">
      <div className="container">
        <div className="admin__line">
          <Link href={"/"}>Home</Link> / <p>Admin</p>
        </div>
        <div className="admin__section">
          <h1>Admin panel</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur cupiditate inventore, deserunt magnam provident
              dolores blanditiis ullam iusto! Assumenda dolor quis itaque
              commodi tempore laudantium quam deleniti id consequatur. Minus
              delectus officia unde quam nulla ut. Odit quibusdam quis aut enim
              delectus blanditiis, quisquam quidem maiores suscipit.
              Dignissimos, ut repudiandae!
            </p>
          </div>
          <button>Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
