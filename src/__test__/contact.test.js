import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"; // import whole library for jest-dom matchers

describe("Contact Component", () => {  // describe block to group tests related to a component
    test("should load the component",() => {
render(<Contact />);

const heading  = screen.getByRole("heading");

// Assertion to check if the component renders without crashing
expect(heading).toBeInTheDocument();
});

test("should load matching the text from the contact component",() => {
render(<Contact />);

const button  = screen.getByText("Submit");

// Assertion to check if the component renders without crashing
expect(button).toBeInTheDocument();
});
});



test("should load input by placeholder name from the contact component",() => {
render(<Contact />);

const input  = screen.getByPlaceholderText("Name");

// Assertion to check if the component renders without crashing
expect(input).toBeInTheDocument();
});

test("should load 2 inputboxes from the contact component",() => {
render(<Contact />);

const inputBoxes  = screen.getAllByRole("textbox"); // not input but textbox also: screen rturns an array of elements
//console.log(inputBoxes.length);

// Assertion to check if the component renders without crashing
expect(inputBoxes.length).toBe(2);
expect(inputBoxes[0]).toBeInTheDocument();
expect(inputBoxes).not.toBe(3);
}); 