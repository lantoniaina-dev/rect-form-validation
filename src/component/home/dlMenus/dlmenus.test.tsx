import DlMenus from "./dlmenus";
import { render, cleanup } from "@testing-library/react"
import { screen } from "@testing-library/dom"

test("render DlMenus", () => {
    render(<DlMenus step={"0"} title={"ra toky e"} />);
    const text = screen.getByText("ra toky e")
    expect(text).toBeInTheDocument()
})