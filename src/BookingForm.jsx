import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { submitAPI } from "./api";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isSuccess = submitAPI({
      fullName,
      email,
      guests,
      occasion,
      date,
      time,
    });

    if (isSuccess) {
      navigate("/confirmationPage");
    } else {
      alert("Failed to submit booking. Try again.");
    }
  };
  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };
  return (
    <section className="bgGray">
      <Navbar></Navbar>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-8 rounded-lg "
      >
        <div className="text-3xl font-bold mb-6 w-fit  mx-auto">
          Reservation Form
        </div>

        <label
          className="block mb-2 text-center text-[#495E57] font-semibold"
          htmlFor="fullName"
        >
          Name:
        </label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your full name"
          required
          minLength={2}
          maxLength={50}
          className="w-full mb-4 p-3 text-center rounded border bg-white border-black focus:outline-none focus:ring-2 focus:ring-[#000000]"
        />

        <label
          className="block text-center mb-2 text-[#495E57] font-semibold"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          required
          className="w-full mb-4 text-center p-3 rounded border bg-white border-black focus:outline-none focus:ring-2 focus:ring-[#000000]"
        />

        <label
          className="block mb-2 text-center text-[#495E57] font-semibold"
          htmlFor="date"
        >
          Date:
        </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => handleDateChange(e)}
          required
          className="w-full mb-4 text-center p-3 rounded border bg-white border-black focus:outline-none focus:ring-2 focus:ring-[#000000]"
        />

        <label
          className="block mb-2 text-center text-[#495E57] font-semibold"
          htmlFor="time"
        >
          Time:
        </label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="w-full text-center mb-4 p-3 rounded border bg-white border-black focus:outline-none focus:ring-2 focus:ring-[#000000]"
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label
          className="block mb-2 text-center text-[#495E57] font-semibold"
          htmlFor="guests"
        >
          Guests:
        </label>
        <input
          id="guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.valueAsNumber)}
          required
          min={1}
          max={20}
          className="w-full text-center mb-4 p-3 rounded border bg-white border-black focus:outline-none focus:ring-2 focus:ring-[#000000]"
        />

        <label
          className="text-center block mb-2 text-[#495E57] font-semibold"
          htmlFor="occasion"
        >
          Occasion:
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
          className=" text-center w-full mb-12 p-3 rounded border bg-white border-black focus:outline-none focus:ring-2 focus:ring-[#000000]"
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <button
          type="submit"
          aria-label="On Click"
          className="w-[60%] mx-auto block bgy  font-semibold py-3 rounded transition duration-300 hover:bg-yellow-600 hover:text-white"
        >
          Make Your Reservation
        </button>
      </form>
      <Footer></Footer>
    </section>
  );
};

export default BookingForm;
