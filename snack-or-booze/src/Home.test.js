import React from "react"
import {render} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from "react-router-dom";
import Home from "./Home"

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

const drinks = [
    {
        "id": "martini",
        "name": "Martini",
        "description": "An ice-cold, refreshing classic.",
        "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
        "serve": "Serve very cold, straight up."
    },
    {
        "id": "negroni",
        "name": "Negroni",
        "description": "A nice drink for a late night conversation.",
        "recipe": "Mix equal parts of gin, Campari, and sweet vermouth.",
        "serve": "Serve cold, either on the rocks or straight up."
    },
    {
        "id": "gin-and-tonic",
        "name": "Gin and Tonic",
        "description": "Like regular tonic, but with gin.",
        "recipe": "Mix 2 parts gin & 1 part tonic water.",
        "serve": "Serve in a tall glass over ice, garnished with a lime wedge."
    },
    {
        "id": "diet-coke",
        "name": "Diet Coke",
        "description": "Crisp!",
        "recipe": "Open can.",
        "serve": "Immediately."
    }
]

it("Should it render",function(){
    render(
    <MemoryRouter>
        <Home drinks={drinks} snacks={snacks}/>
    </MemoryRouter>
    )
})

it("should it match snapshot",function(){
    const {asFragment} = render(
        <MemoryRouter>
            <Home drinks={drinks} snacks={snacks}/>
        </MemoryRouter>
        )

    expect(asFragment()).toMatchSnapshot()
})

it("should it match context",function(){
    const {getByText} = render(
        <MemoryRouter>
            <Home drinks={drinks} snacks={snacks} />
        </MemoryRouter>
    )

    expect(getByText("Welcome to Silicon Valley's premier dive cafe!")).toBeInTheDocument()
    expect(getByText("Snacks:3")).toBeInTheDocument()
    expect(getByText("Drinks:4")).toBeInTheDocument()
})


