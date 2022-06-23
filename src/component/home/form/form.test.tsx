import { render, cleanup } from "@testing-library/react"
import { FormHome } from "./form"
import ReactDOM from 'react-dom/client';
import { screen } from "@testing-library/dom"
import { validate } from "./validation";

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
    render(<FormHome />);
    const label = screen.getByText("Numero de telephone*")
    expect(label).toBeInTheDocument()
})

test("validation  ", () => {
    const data = { numero: "", nom: "", prenom: "", email: "", codePostal: "625" };
    const data2 = { numero: "52", nom: "", prenom: "", email: "", codePostal: "" };
    const data3 = { numero: "52526", nom: "", prenom: "", email: "", codePostal: "" };
    expect(Object.keys(validate(data)).length).toBe(4)
    expect(Object.keys(validate(data2)).length).toBe(5)
    expect(Object.keys(validate(data3)).length).toBe(4)
})

