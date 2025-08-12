import { render, screen,fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", {name : "Login"});
  expect(loginButton).toBeInTheDocument();
});
it("should render header component with cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText("Cart (0) items");
  expect(loginButton).toBeInTheDocument();
});
test("should render header component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByText(/Cart/);
  expect(loginButton).toBeInTheDocument();
});
it("should change login to logout button on click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", {name : "Login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", {name : "Logout"});
  expect(logoutButton).toBeInTheDocument();
});
