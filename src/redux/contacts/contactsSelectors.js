export const selectContacts = (state) => state.contacts.items;
export const selectQuery = (state) => state.contacts.query;

export const selectFilteredContacts = (state) =>
  selectContacts(state).filter((items) =>
    items.name.toLowerCase().includes(selectQuery(state).toLowerCase())
  );
