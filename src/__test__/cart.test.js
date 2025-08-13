import { render, act, screen, fireEvent } from "@testing-library/react";
import ResturantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load restuarant menu and cart items", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResturantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  expect(screen.getAllByTestId("resMenuItems").length).toBe(33);
  //console.log(screen.getAllByTestId("resMenuItems").length, "inside test case");

  const accordionHeader = screen.getByText("Rakhi Special Desserts(3)");
  expect(accordionHeader).toBeInTheDocument();
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("resMenuCategory").length).toBe(3);

  const addBtn = screen.getAllByRole("button", { name: "ADD" });
  expect(addBtn.length).toBe(3);
  fireEvent.click(addBtn[0]);

  //console.log(screen.getAllByTestId("resMenuCategory").length, "inside test case");

  expect(screen.getByText("Cart (1) items")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart (2) items")).toBeInTheDocument();

  expect(screen.getAllByTestId("resMenuCategory").length).toBe(5);

  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  expect(clearBtn).toBeInTheDocument();
  fireEvent.click(clearBtn);
  expect(screen.getByText("Cart is empty")).toBeInTheDocument();
  expect(screen.getAllByTestId("resMenuCategory").length).toBe(3);
});
