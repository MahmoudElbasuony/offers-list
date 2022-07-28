
import ReduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./Reducers";

export default configureStore({
    middleware: [ReduxThunk],
    reducer: Reducers
});
