const { createSlice } = require("@reduxjs/toolkit");
const { actions } = require("./todoReducer");
const { noteActions } = require("./noteReducers");

const initialState = {
  message: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.message = "";
    },
  },
  //   extraReducers: {
  //     "todo/add": (state, action) => {
  //       state.message = "A new Todo has been added successfully";
  //     },
  //     "todo/toggle": (state, action) => {
  //       state.message = "The todo has been toggled successfully";
  //     },
  //     "note/add": (state, action) => {
  //       state.message = "A new note has been added successfully";
  //     },
  //     "note/delete": (state, action) => {
  //       state.message = "The note has been deleted successfully";
  //     },
  //   },
  //   extraReducers: (builder) => {
  //     builder.addCase(actions.add, (state, action) => {
  //       state.message = "A new Todo has been added successfully";
  //     });
  //   },
  extraReducers: {
    [actions.add]: (state, action) => {
      state.message = "A todo has been created successfully";
    },
    [actions.toggle]: (state, action) => {
      state.message = "A todo has been toggle successfully";
    },
    [noteActions.add]: (state, action) => {
      state.message = "A note has been created Successfully";
    },
    [noteActions.delete]: (state, action) => {
      state.message = "A note has been deleted successfully";
    },
  },
});

export const notificationReducer = notificationSlice.reducer;

export const resetNotification = notificationSlice.actions.reset;
export const notificationSelector = (state) =>
  state.notificationReducer.message;
