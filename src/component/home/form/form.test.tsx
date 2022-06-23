import { render, cleanup } from "@testing-library/react"
import { FormHome } from "./form"
import ReactDOM from 'react-dom/client';
import { screen } from "@testing-library/dom"

afterEach(cleanup)

test("scenario example", () => {
    expect(1).toBe(1)
})

//getByTestId dans component : data-testid="button-submit" si content = Envoyer ma demande
test("render FormHome correctly", () => {
    const { getByTestId } = render(<FormHome />);
    expect(getByTestId('button-submit')).toHaveTextContent("Envoyer ma demande")
})

//Cherche si y a un text "Numero de telephone*" dans component
test("render FormHome correctly 2", () => {
    const { getByTestId } = render(<FormHome />);
    const label = screen.getByText("Numero de telephone*")
    expect(label).toBeInTheDocument()
})