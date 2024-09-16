import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe('contact us page test cases', () => {
    // beforeAll(()=>{
    //     console.log("before All")
    // });
    // beforeEach(()=>{
    //     console.log("before Each")
    // })
    test('should load contact us component', () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();

    });
    it('should load button inside contact us component', () => {
        render(<Contact />);
        const button = screen.getByText("Submit")
        expect(button).toBeInTheDocument();
    });
    test('should load input box contact us component', () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("name")
        expect(inputName).toBeInTheDocument();
    });
    it('should load two input boxes contact us component', () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox")
        //console.log(inputBoxes)
        expect(inputBoxes.length).toBe(2)
    });
})

