import { combineReducers } from "redux";
import offersReducer from "./OffersReducer";


export default combineReducers({
  offers: offersReducer
});
