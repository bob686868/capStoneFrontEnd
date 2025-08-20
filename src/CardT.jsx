import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";

const CardT = ({ src, name, text }) => {
  return (
    <div className="bg-[#f8e0cb] p-8  rounded-lg shadow-md w-full text-center h-full flex flex-col justify-center">
      <img
        src={src}
        alt={name}
        className="w-34 h-34 rounded-full mx-auto  mb-4"
      />
      <div className="mdF font-semibold text-gray-800 mb-2">{name}</div>

      <div className="flex justify-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>

      <p className="smF text-gray-700 italic px-2 mb-3">{text}</p>
      <div className="text-yellow-400 w-fit mx-auto mdF">
        <FaQuoteRight className="" />
      </div>
    </div>
  );
};

export default CardT;
