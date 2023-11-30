import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./contacts/contactsReducer";

export const store = configureStore({
  reducer: {
    contacts: tasksReducer,
  },
});
