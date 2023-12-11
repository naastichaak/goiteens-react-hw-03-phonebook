import ContactList from "./ContactList/ContactList";
import ContactEditor from "./ContactEditor/ContactEditor";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactAction,
  removeContactAction,
  setQueryAction,
} from "../redux/contacts/contactsActions";
import {
  selectContacts,
  selectFilteredContacts,
  selectQuery,
} from "../redux/contacts/contactsSelectors";

function App() {
  const contacts = useSelector(selectContacts);
  const query = useSelector(selectQuery);
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  function addContact(name, number) {
    const existingContact = contacts.find(
      (contact) => contact.name === name || contact.number === number
    );
    if (existingContact) {
      alert("number is already exists");
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContactAction(newContact));
  }

  function removeContact(id) {
    dispatch(removeContactAction(id));
  }

  return (
    <div>
      <h1>PhoneBook</h1>

      <ContactEditor onCreate={addContact} />

      <h1>Contacts</h1>

      <Filter
        onFilterChange={(value) => dispatch(setQueryAction(value))}
        filterValue={query}
      />
      {filteredContacts.length !== 0 && (
        <ContactList contacts={filteredContacts} onDelete={removeContact} />
      )}
    </div>
  );
}

export default App;
