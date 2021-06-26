import React from "react"
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom"
import NavBar from "./NavBar"

it("should it render",function(){
    render(
    <MemoryRouter>
        <NavBar />
    </MemoryRouter>
    )
})

it("should it match snapshot",function(){
    const {asFragment} = render(
    <MemoryRouter>
        <NavBar />
    </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
})

it("should it have title",function(){
    const {getByText} = render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
    )
    const snack = getByText("Snacks")
    const title = getByText("Snack or Booze")

    expect(snack).toBeInTheDocument()
    expect(title).toBeInTheDocument()
})