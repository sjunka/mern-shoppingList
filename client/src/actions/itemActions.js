// import actions from types
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from "./types";

// import http library
import axios from "axios";

//  export action  { dispatch calls the actions}
export const getItems = () => dispatch => {
    // Set loading to true
    dispatch(setItemsLoading());

    // Http get request with axios
    axios.get("api/items").then(response =>
        dispatch({
            type: GET_ITEMS,
            payload: response.data
        })
    );
};

//  export action dispatching the item to the reducer
export const addItem = item => dispatch => {
    //  Http post request
    axios.post("/api/items", item).then(response =>
        dispatch({
            type: ADD_ITEM,
            payload: response.data
        })
    );
};
//  export action dispatching the id of the item
export const deleteItem = id => dispatch => {
    // Http delete request
    axios.delete(`/api/items/${id}`).then(response => dispatch({
        type: DELETE_ITEM,
        payload: id
    }))
};

// Dispatch the items with the loading payload
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};
