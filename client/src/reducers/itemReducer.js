// import  action Types
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";

// Define initial state for object item
import uuid from "uuid";

const initialState = {
    items: [
        { id: uuid(), name: "Eggs" },
        { id: uuid(), name: "Milk" },
        { id: uuid(), name: "Sugar" },
        { id: uuid(), name: "Ham" },
        { id: uuid(), name: "Apples" },
        { id: uuid(), name: "Tomato" }
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        default:
            return state;
    }
}
