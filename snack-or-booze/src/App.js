import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import AddForm from "./AddItemForm";
import NotFound from "./NotFound"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks,setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }

    async function getDrinks(){
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }

    getSnacks();
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  const updateSnack = (newSnack)=>{
    setSnacks(prevSnack => ([
      ...prevSnack,
      newSnack
    ]))
  }


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks}/>
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/snacks/add">
              <AddForm add={updateSnack} title="add new snack" />
            </Route>
            <Route path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu items={drinks} title="drinks" />
            </Route>
            <Route path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
