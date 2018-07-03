// React imports
import React, { Component, Fragment } from "react";

// Components imports
import AppNavBar from "./components/AppNavbar";
import ShoppingList from "./components/ShopingList";
import ItemModal from "./components/ItemModal"

// Redux imports
import { Provider } from "react-redux";
import store from "./store";

// Styling importst
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <AppNavBar />
                    <Container>
                    <ItemModal/>
                    <ShoppingList />


                    </Container>
                </Fragment>
            </Provider>
        );
    }
}

export default App;
