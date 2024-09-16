import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it('should search reslist for subway input ', async () => {

    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));
    const search = screen.getByRole("button", { name: "Search" });
    const input = screen.getByTestId("searchInput")
    fireEvent.change(input, { target: { value: "Subway" } })
    fireEvent.click(search)
    const cards = screen.getAllByTestId("resCard")
    expect(cards.length).toBe(1);
});
