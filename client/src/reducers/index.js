// Redux imports
import { combineReducers } from "redux";

// Custom reducers 
import  itemReducer  from "./itemReducer";

export default combineReducers({
    item: itemReducer
});