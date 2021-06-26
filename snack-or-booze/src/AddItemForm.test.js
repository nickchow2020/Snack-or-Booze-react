import React from "react";
import {fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";
import AddItemForm from "./AddItemForm"
it("should it render",function(){
    render(
    <MemoryRouter>
        <AddItemForm />
    </MemoryRouter>
    )
}) 

it("should it match Snapshot",function(){
    const {asFragment} = render(
        <MemoryRouter initialEntries={["/snacks/add"]}>
            <AddItemForm />
        </MemoryRouter>
        )

    expect(asFragment()).toMatchSnapshot()
})


it("should it match context",function(){
    const {getByText,getByPlaceholderText} = render(
        <MemoryRouter initialEntries={["/snacks/add"]}>
            <AddItemForm />
        </MemoryRouter>
        )

    expect(getByText("Add New Snack")).toBeInTheDocument()
    expect(getByPlaceholderText("enter item name")).toBeInTheDocument()
})
