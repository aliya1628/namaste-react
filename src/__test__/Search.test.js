import { fireEvent, render, screen,waitFor,act } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resListDataMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search restaurant List for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();

  const cardBeforeSearch = screen.getAllByTestId("resCardList");
  expect(cardBeforeSearch.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  const cardAfterSearch = screen.getAllByTestId("resCardList");
  expect(cardAfterSearch.length).toBe(3);
});

it("should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  expect(topRatedBtn).toBeInTheDocument();

  const cardBeforeFilter = screen.getAllByTestId("resCardList");
  expect(cardBeforeFilter.length).toBe(20);

  fireEvent.click(topRatedBtn);

 await waitFor(() => {
  const cardAfterFilter = screen.getAllByTestId("resCardList");
  expect(cardAfterFilter.length).toBe(12);
});
});
