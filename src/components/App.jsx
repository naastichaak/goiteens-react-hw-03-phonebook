import { useState } from "react";
import ContactList from "./ContactList/ContactList";
import ContactEditor from "./ContactEditor/ContactEditor";
import Filter from "./Filter/Filter";
import { nanoid } from "nanoid";
// import {
//   addContactsService,
//   getContactsService,
//   removeContactsService,
// } from "../servises/contactsService";
import { useDispatch, useSelector } from "react-redux";
import {
  addContactAction,
  removeContactAction,
} from "../redux/contacts/contactsActions";
import { selectContacts } from "../redux/contacts/contactsSelectors";

// function initContacts() {
//   const contacts = localStorage.getItem("contacts");
//   if (contacts) {
//     return JSON.parse(contacts);
//   } else {
//     return [];
//   }
// }

function App() {
  const contacts = useSelector(selectContacts);
  const [filter, setFilter] = useState("");

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
    // addContactsService(name, number).then((newContact) => {
    //   setContacts((prevContact) => [newContact, ...prevContact]);
    // });
  }

  // useEffect(() => {
  //   getContactsService().then((data) => setContacts(data));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  function removeContact(id) {
    dispatch(removeContactAction(id));
    // removeContactsService(id).then(() => {
    //   setContacts((prevContact) =>
    //     prevContact.filter((contact) => contact.id !== id)
    //   );
    // });
  }

  const filteredContact = contacts.filter((contact) => {
    if (contact.name.includes(filter)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <h1>PhoneBook</h1>

      <ContactEditor onCreate={addContact} />

      <h1>Contacts</h1>

      <Filter onFilterChange={setFilter} filterValue={filter} />
      {filteredContact.length !== 0 && (
        <ContactList contacts={filteredContact} onDelete={removeContact} />
      )}
    </div>
  );
}

export default App;
