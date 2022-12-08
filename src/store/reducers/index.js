import { combineReducers } from "@reduxjs/toolkit";
import generalReducer from "./generalReducer";

const rootReducer = combineReducers({
    generalStats: generalReducer,
});

export default rootReducer;
