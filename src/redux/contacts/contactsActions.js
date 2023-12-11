import { createAction } from "@reduxjs/toolkit";

export const addContactAction = createAction("CONTACTS_ADD");
export const removeContactAction = createAction("CONTACTS_REMOVE");

export const setQueryAction = createAction("CONTACTS_SET_QUERY");
