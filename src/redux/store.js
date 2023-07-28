// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { noteReducer } from "./reducers/noteReducers";
import { notificationReducer } from "./reducers/notificationReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";

// const result = combineReducers({
//   todoReducer,
//   noteReducer,
// });

// export const store = redux.createStore(result);

export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
    notificationReducer,
  },
  middleware: [...getDefaultMiddleware(), loggerMiddleware],
});
