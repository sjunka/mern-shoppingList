// import actions from types
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

//  export action
export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};

//  export action dispatching the id of the item
export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};
