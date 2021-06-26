import React from "react";
import {render,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";
import Menu from "./Menu";


const snacks = [
    {
        "id": "nachos",
        "name": "Nachos",
        "description": "An American classic!",
        "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
        "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
    },
    {
        "id": "hummus",
        "name": "Hummus",
        "description": "Sure to impress your vegan friends!",
        "recipe": "Purchase one container of hummus.",
        "serve": "Place unceremoniously on the table, along with pita bread."
    },
    {
        "id": "arugula-and-walnut-salad",
        "name": "Arugula and Walnut Salad",
        "description": "Tart and delicious.",
        "recipe": "Mix arugula, toasted walnuts, and thinly-sliced Parmesan cheese. Dress with lemon and olive oil.",
        "serve": "Place on tiny, precious little plates."
    }
]

it("should it render",function(){
    render(
    <MemoryRouter>
        <Menu items={snacks} />
    </MemoryRouter>
    )
})

it("should it match snapshot",function(){
    const {asFragment} = render(
        <MemoryRouter>
            <Menu items={snacks} />
        </MemoryRouter>
        )

    expect(asFragment()).toMatchSnapshot()
})


it("should it match context",function(){
    const {getByText} = render(
        <MemoryRouter initialEntries={["/snacks"]}>
            <Menu items={snacks} />
        </MemoryRouter>
        )

    expect(getByText("Nachos")).toBeInTheDocument()
})

it("should it show form",function(){
    const {getByText} = render(
        <MemoryRouter initialEntries={["/snacks"]}>
            <Menu items={snacks} />
        </MemoryRouter>
        )
    
    const addNewFormBtn = getByText("Add New Snack")
    fireEvent.click(addNewFormBtn)

    expect(getByText("Add New Snack")).toBeInTheDocument()
})



