import { useState, useEffect } from "react";
import ContactList from "./ContactList/ContactList";
import ContactEditor from "./ContactEditor/ContactEditor";
import Filter from "./Filter/Filter";
import {
  addContactsService,
  getContactsService,
  removeContactsService,
} from "../servises/contactsService";
// import axios from "axios";

function initContacts() {
  const contacts = localStorage.getItem("contacts");
  if (contacts) {
    return JSON.parse(contacts);
  } else {
    return [];
  }
}

function App() {
  const [contacts, setContacts] = useState(initContacts);
  const [filter, setFilter] = useState("");

  function addContact(name, number) {
    const existingContact = contacts.find((contact) => contact.name === name);
    if (existingContact) {
      alert(existingContact.name + " already exists");
      return;
    }

    addContactsService(name, number).then((newContact) => {
      setContacts((prevContact) => [newContact, ...prevContact]);
    });
  }

  useEffect(() => {
    getContactsService().then((data) => setContacts(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function removeContact(id) {
    removeContactsService(id).then(() => {
      setContacts((prevContact) =>
        prevContact.filter((contact) => contact.id !== id)
      );
    });
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
