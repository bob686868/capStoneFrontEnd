import React from "react";
import logo from "./assets/logo.png";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className=" bgg mt-30 text-[18px] text-white pb-10 px-5 pt-5">
      <article className=" grid grid-cols-2 gap-x-2 gap-y-10 lg:grid-cols-3 ">
        <img src={logo} alt="Little Lemon logo" className="" />

        <article className="flex flex-col gap-y-1">
          <div className="font-bold smF">Little Lemon</div>
          <Link
            to="/#home"
            className="hover:text-[var(--color-accent-yellow)] text-[18px]"
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="hover:text-[var(--color-accent-yellow)] text-[18px]"
          >
            About
          </Link>
          <Link
            to="/#specials"
            className="hover:text-[var(--color-accent-yellow)] text-[18px]"
          >
            Specials
          </Link>
          <Link
            to="/booking"
            className="hover:text-[var(--color-accent-yellow)] text-[18px]"
          >
            Reservations
          </Link>
        </article>

        <article className="flex flex-col gap-y-2">
          <div>Contact Information</div>
          <div>Address: Chicago, Illinois, USA</div>
          <div>Phone: 312-938-7229</div>
          <div>Email: hello@littlelemon.com</div>
        </article>

        <article>
          <div className="font-bold mb-2">Find us in Social networks!</div>
          <div className="flex gap-x-2">
            <FaXTwitter className="text-4xl hover:text-[var(--color-accent-yellow)]"></FaXTwitter>
            <CiFacebook className="text-4xl hover:text-[var(--color-accent-yellow)]"></CiFacebook>
            <FaInstagram className="text-4xl hover:text-[var(--color-accent-yellow)]"></FaInstagram>
          </div>
        </article>
      </article>

      <div className="text-sm mt-6">
        <div> © Copyright. All rights reserved.</div>
        <p className="mt-2">
          Created by Ibrahim Zakaria for the capstone project of the Meta
          front-end developer certificate.
        </p>
      </div>
    </section>
  );
};

export default Footer;
