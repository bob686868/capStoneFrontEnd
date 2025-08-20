import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your reservation. We look forward to seeing you soon!
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
