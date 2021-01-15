import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test("sanity check test, renders app without errors", () => {
  render(<CheckoutForm />)
});

test("form header renders", () => {
  // Arrange: render out App component
  render(<CheckoutForm />)
  // Get our header DOM
  const header = screen.getByText("Checkout Form")
  // Assert: Make sure that the header actually exists
  console.log(header);
});

test("form shows success message on submit with form details", () => {

});
