// imports for react
import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

// imports for redux
import { connect } from "react-redux"; // connects react and react-redux {gets state from redux into component}

// import custom actions
import { getItems, deleteItem } from "../actions/itemActions";

class ShopingList extends Component {
    componentDidMount = () => {
        this.props.getItems();
    };

    onDeleteClick = id => {
        this.props.deleteItem(id);
    };

    render() {
        const { items } = this.props.item;
        return (
            <Container>
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
                                        onClick={() => this.onDeleteClick(id)}
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
    {
        getItems,
        deleteItem
    }
)(ShopingList);
