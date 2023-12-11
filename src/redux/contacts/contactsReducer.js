import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addContactAction,
  removeContactAction,
  setQueryAction,
} from "./contactsActions";

// export const tasksReducer = createReducer([], () => {});

const tasksReducer = createReducer([], (builder) => {
  builder
    .addCase(addContactAction, (state, action) => {
      state.unshift(action.payload);
    })
    .addCase(removeContactAction, (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    });
});

const queryReduser = createReducer("", (builder) => {
  builder.addCase(setQueryAction, (_, action) => action.payload);
});

export default combineReducers({
  items: tasksReducer,
  query: queryReduser,
});
