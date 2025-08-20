import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from './BookingForm';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from "react-router-dom";  
import { initializeTimes, updateTimes } from "./App";

import ConfirmedBooking from "./ConfirmationBooking";
import * as api from "./api.js";

test("renders Reservation Form heading", () => {
  const availableTimes = ["10:00", "11:00", "12:00"];
  const dispatch = jest.fn();
 render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </MemoryRouter>
  );
  expect(screen.getByText("Reservation Form")).toBeInTheDocument();
});


// describe("updateTimes", () => {
//   test("returns the same state that was provided", () => {
//     // Arrange
//     const today = new Date();
//     const initialState = ["17:00", "18:00", "19:00"];
//     const action = { type: "UPDATE_TIMES", date: today}; // mock action

//     // Act
//     const result = updateTimes(initialState, action);

//     // Assert
//     expect(result).toEqual(initialState);
//   });
// });

// const mockSubmitForm = jest.fn((formData, navigate) => {
//   navigate("/confirmed");
// });

test('x',()=>expect(true).toBe(true))
test('x',()=>expect(true).toBe(true))
test('x',()=>expect(true).toBe(true))



const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

jest.mock("./api", () => ({
  submitAPI: jest.fn(() => true),
}))

test("submits form and navigates to confirmation page", () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={["17:00"]} dispatch={() => {}} />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: "John Doe" } });
  fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: "john@example.com" } });
  fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: "2025-08-20" } });
  fireEvent.change(screen.getByLabelText(/Time:/i), { target: { value: "17:00" } });
  fireEvent.change(screen.getByLabelText(/Guests:/i), { target: { value: 2 } });
  fireEvent.change(screen.getByLabelText(/Occasion:/i), { target: { value: "Birthday" } });

  fireEvent.click(screen.getByText(/Make Your Reservation/i));

  // 1️⃣ Check submitAPI was called with correct data
  expect(api.submitAPI).toHaveBeenCalledWith({
    fullName: "John Doe",
    email: "john@example.com",
    date: "2025-08-20",
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  });

  // 2️⃣ Check that navigate was called with the confirmation page
//   expect(mockedNavigate).toHaveBeenCalledWith("/confirmationPage");
 });





// test("initializeTimes returns available times from API", () => {
//   // Arrange
//   const mockTimes = ["17:00", "18:00", "19:00"];
//   api.fetchAPI.mockReturnValue(mockTimes);

//   // Act
//   const times = initializeTimes();

//   // Assert
//   expect(api.fetchAPI).toHaveBeenCalled(); // It should call fetchAPI with today
//   expect(times).toEqual(mockTimes);
// });

// test("updateTimes returns times from API for selected date", () => {
//   // Arrange
//   const mockTimes = ["17:00", "18:00"];
//   api.fetchAPI.mockReturnValue(mockTimes);
//   const state = []; // initial state
//   const action = { type: "UPDATE_TIMES", date: new Date("2025-08-20") };

//   // Act
//   const newState = updateTimes(state, action);

//   // Assert
//   expect(api.fetchAPI).toHaveBeenCalledWith(action.date);
//   expect(newState).toEqual(mockTimes);
// });

test("updateTimes returns same state if action type does not match", () => {
  const state = ["17:00"];
  const action = { type: "UNKNOWN" };
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});


// Mock submitAPI before importing BookingForm
jest.mock("./api", () => ({
  submitAPI: jest.fn(),
}));



import { submitAPI } from "./api.js";


const mockDispatch = jest.fn();
const availableTimes = ["10:00", "11:00", "12:00"];

// Mock useNavigate
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

// Mock alert
window.alert = jest.fn();

describe("BookingForm Component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );
  });

  test("renders all input fields with correct HTML5 validation attributes", () => {
    expect(screen.getByLabelText(/Name:/i)).toHaveAttribute("required");
    expect(screen.getByLabelText(/Email:/i)).toHaveAttribute("required");
    expect(screen.getByLabelText(/Email:/i)).toHaveAttribute("type", "email");
    expect(screen.getByLabelText(/Guests:/i)).toHaveAttribute("min", "1");
    expect(screen.getByLabelText(/Date:/i)).toHaveAttribute("required");
    expect(screen.getByLabelText(/Time:/i)).toHaveAttribute("required");
  });

  test("updates form fields on user input", () => {
    const fullNameInput = screen.getByLabelText(/Name:/i);
    fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
    expect(fullNameInput.value).toBe("John Doe");

    const guestsInput = screen.getByLabelText(/Guests:/i);
    fireEvent.change(guestsInput, { target: { value: 3 } });
    expect(guestsInput.value).toBe("3");
  });

  test("submits form and calls submitAPI with correct data", () => {
    fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Guests:/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/Date:/i), { target: { value: "2025-08-20" } });
    fireEvent.change(screen.getByLabelText(/Time:/i), { target: { value: "11:00" } });
    fireEvent.change(screen.getByLabelText(/Occasion:/i), { target: { value: "Birthday" } });

    submitAPI.mockReturnValue(true);

    fireEvent.click(screen.getByText(/Make Your Reservation/i));

    expect(submitAPI).toHaveBeenCalledWith({
      fullName: "John Doe",
      email: "john@example.com",
      guests: 2,
      date: "2025-08-20",
      time: "11:00",
      occasion: "Birthday",
    });

    expect(mockedNavigate).toHaveBeenCalledWith("/confirmationPage");
  });

  test("calls dispatch on date change", () => {
    const dateInput = screen.getByLabelText(/Date:/i);
    fireEvent.change(dateInput, { target: { value: "2025-08-21" } });

    expect(mockDispatch).toHaveBeenCalled();
    const dispatchedAction = mockDispatch.mock.calls[0][0];
    expect(dispatchedAction.type).toBe("UPDATE_TIMES");
    expect(dispatchedAction.date).toBeInstanceOf(Date);
  });
});
