import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows
test("sanity check test, renders app without errors", () => {
  render(<CheckoutForm />)
});

test("form header renders", () => {
  // Arrange: render out App component
  render(<CheckoutForm />)
  // Act: Get our header DOM
  const header = screen.getByText("Checkout Form")
  // Assert: Make sure that the header actually exists
  expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", () => {
  // Arrange:
  render(<CheckoutForm />)

  // Act:
  // 1. Get fname, lname, address, city, state, zip
  const fname = screen.getByLabelText("First Name:");
  const lname = screen.getByLabelText("Last Name:");
  const address = screen.getByLabelText("Address:");
  const city = screen.getByLabelText("City:");
  const state = screen.getByLabelText("State:");
  const zip = screen.getByLabelText("Zip:");

  
  // 2. Type values
  userEvent.type(fname, "John");
  userEvent.type(lname, "Doe");
  userEvent.type(address, "123 Abc Street");
  userEvent.type(city, "Nowhere");
  userEvent.type(state, "NM");
  userEvent.type(zip, "00001");

  // 3. Push submit
  const button = screen.getByRole('button');
  userEvent.click(button);

  // Assert:
  // success-message is on the screen with fname, lname, address, city, state, zip
  const successMessage = screen.queryByText("You have ordered some plants! Woo-hoo!")
  const newFName = screen.queryByText("John");
  const newLName = screen.queryByText("Doe");
  const newAddress = screen.queryByText("123 Abc Street");
  const newCity = screen.queryByText("Nowhere");
  const newState = screen.queryByText("NM");
  const newZip = screen.queryByText("00001");

  expect(successMessage).toBeInTheDocument();
  expect(newFName).toBeTruthy;
  expect(newLName).toBeTruthy;
  expect(newAddress).toBeTruthy;
  expect(newCity).toBeTruthy;
  expect(newState).toBeTruthy;
  expect(newZip).toBeTruthy;
});
