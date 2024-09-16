import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it('should Load Restaurant Menu component ', async () => {
    await act(async () => render(<BrowserRouter>
        <Provider store={appStore} >
            <Header />
            <RestaurantMenu />
            <Cart/>
        </Provider>
    </BrowserRouter>));
    const accordionHeader = screen.getByText("Recommended (14)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("items").length).toBe(14)
    const addbtn = screen.getAllByRole("button", { name: "Add+" })
    fireEvent.click(addbtn[0])
    expect(screen.getByText("Cart - (1)")).toBeInTheDocument();
    expect(screen.getAllByTestId("items").length).toBe(15);
    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    expect(screen.getAllByTestId("items").length).toBe(14);
    expect(screen.getByText("Cart is Empty add Items to Cart")).toBeInTheDocument();



})
