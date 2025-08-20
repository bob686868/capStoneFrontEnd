import React from "react";
import sandwiches from "./assets/restaurant-food.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="flex items-center p-[4vw] bg-[var(--color-primary-dark-green)] h-[60vh] overflow-hidden">
      <div className="flex gap-2 justify-center   lg:[w-50vw] mx-auto">
        <div className="text-white p-[4vw] flex flex-col gap-y-2">
          <h1 className="text-[clamp(54px,5vw,64px)]  text-[var(--color-accent-yellow)]">
            Little Lemon
          </h1>
          <h3 className="mdF">Chicago</h3>
          <p className="text-[clamp(16px,5vw,22px)] ">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link
            to="/booking"
            className="p-2 mt-[2vw] text-center rounded-sm bg-[var(--color-accent-yellow)] text-[clamp(16px,5vw,22px)] text-black hover:bg-yellow-600 hover:text-white transition duration-300 w-[30vw]"
          >
            Reserve A Table
          </Link>
        </div>
        <div>
          <img
            src={sandwiches}
            alt="sandwiches"
            className="w-130 h-80 mt-10 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
