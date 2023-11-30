import { createReducer } from "@reduxjs/toolkit";
import { addContactAction, removeContactAction } from "./contactsActions";

// export const tasksReducer = createReducer([], () => {});

export const tasksReducer = createReducer([], (builder) => {
  builder
    .addCase(addContactAction, (state, action) => {
      state.unshift(action.payload);
    })
    .addCase(removeContactAction, (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    });
});
