import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { json } from "react-router-dom";
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
  todos: [],
};

export const getInitialStateAsync = createAsyncThunk(
  "todo/getInitialState",
  // axios.get("http://localhost:4100/api/todos").then((response) => {
  //   console.log("initialState", response.data);
  //   thunkApi.dispatch(actions.setInitialState(response.data));
  // });
  () => {
    return axios.get("http://localhost:4100/api/todos");
  }
);

export const addTodoAsync = createAsyncThunk(
  "todo/addTodo",
  async (payload) => {
    const response = await fetch("http://localhost:4100/api/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        text: payload,
        completed: false,
      }),
    });

    return response.json();
  }
);

//creating redux using redux toolkit
const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.todos = [...action.payload];
    },
    // add: (state, action) => {
    //   state.todos.push({
    //     text: action.payload,
    //     completed: false,
    //   });
    // },
    toggle: (state, action) => {
      state.todos.map((todo, i) => {
        if (i === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialStateAsync.fulfilled, (state, action) => {
        state.todos = [...action.payload.data];
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.todos.push(action.payload);
      });
  },
});

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;
export const todoSelector = (state) => state.todoReducer.todos;
// created reducers using redux
// export function todoReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo, i) => {
//           if (i === action.index) {
//             todo.completed = !todo.completed;
//           }
//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }
// }
