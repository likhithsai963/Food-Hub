import { render, screen } from "@testing-library/react";
import RestaurantCard, { withVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe('RestaurantCard Component', () => {
    it('should Render Restaurant card component with props data', () => {
        render(<RestaurantCard resData={MOCK_DATA} />)
        const name = screen.getByText("Kwality Walls Ice Cream and More");
        expect(name).toBeInTheDocument();
    });
    // it('should Render Restaurant card component with veg label', () => {
    //     render(withVegLabel(<RestaurantCard resData={MOCK_DATA}/>))
    //     expect(screen.getByText("veg")).toBeInTheDocument();
    // });
})
