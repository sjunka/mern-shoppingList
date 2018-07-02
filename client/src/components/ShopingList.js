// imports for react
import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import PropTypes from "prop-types";

// imports for redux
import { connect } from "react-redux"; // connects react and react-redux

// import custom reducers
import  getItems   from "../reducers/itemReducer";

class ShopingList extends Component {

    componentDidMount = () => {
      this.props.getItems()
    }
    
    render() {

        const { items } = this.props.item;
        return (
            <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: "2rem" }}
                    onClick={() => {
                        const name = prompt("Enter Item");
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }}
                >
                    Add Item
                </Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition
                                key={id}
                                timeout={500}
                                classNames="fade"
                            >
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(
                                                    item => item.id !== id
                                                )
                                            }));
                                        }}
                                    >
                                        &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShopingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    item: state.item
});

export default connect(
    mapStateToProps,
    { getItems }
)(ShopingList);
