import { Provider } from "react-redux";
import Header from "../Header";
import { render, screen,fireEvent } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

describe('Header component', () => {
    it("should render header component with login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const login = screen.getByRole("button", { name: "Login" })
        expect(login).toBeInTheDocument();
    });
    it("should render header component with cart items", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const cartItem = screen.getByText("Cart - (0)")
        expect(cartItem).toBeInTheDocument();
    });
    it("should render header component with cart items", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const cartItem = screen.getByText(/Cart/)
        expect(cartItem).toBeInTheDocument();
    });
    it("should change login button to logout on click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        const loginButton = screen.getByRole("button",{name:"Login"});
        fireEvent.click(loginButton)
        const logoutButton = screen.getByRole("button",{name:"Logout"});
        expect(logoutButton).toBeInTheDocument();
    });
})
