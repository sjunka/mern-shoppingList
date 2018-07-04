// import actions from types
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

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

//  export action dispatching the item to the reducer
export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    };
};

// Dispatch the items with the loading payload
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING,
    };
};