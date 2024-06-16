import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

// Configure the Redux store with the root reducer
const store = configureStore({
    reducer: rootReducer // Use the combined root reducer
});

export default store;
