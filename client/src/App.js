import React, { Component, Fragment } from "react";

import AppNavBar from "./components/AppNavbar";
import ShoppingList from "./components/ShopingList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Fragment>
                <AppNavBar />
                <ShoppingList />
            </Fragment>
        );
    }
}

export default App;
