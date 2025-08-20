import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const NotFound = () => {
  return (
    <section>
      <Navbar></Navbar>
      <article className="mt-10">
        <img
          src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-[50vw] block mx-auto mb-7"
        />
        <p className="text-center ">
          Sorry! This page is outside of scope of this project! I'll be build
          this page and more features in future. You can go back to
          <Link to="/" className="text-orange-300">
            {" "}
            Home page
          </Link>
        </p>
      </article>
      <Footer></Footer>
    </section>
  );
};

export default NotFound;
