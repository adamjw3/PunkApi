import { combineReducers } from "redux";
import beerReducer from "./beerReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  beers: beerReducer,
  modal: modalReducer
});
