import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { fetchAPI } from "./api";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingForm from "./BookingForm";
import NotFound from "./NotFound";
import FullPage from "./FullPage";
import ConfirmationBooking from "./ConfirmationBooking";
export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(action.date); // Fetch times for selected date
  }
  return state;
};
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};
function App() {

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route></Route>
          <Route path="/" element={<FullPage />} />
          <Route path="/confirmationPage" element={<ConfirmationBooking />} />
          <Route
            path="/booking"
            element={
              <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
              ></BookingForm>
            }
          ></Route>
          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
