import { useState, useEffect } from "react";

import { nanoid } from "nanoid";

import ContactList from "./ContactList/ContactList";
import ContactEditor from "./ContactEditor/ContactEditor";
import Filter from "./Filter/Filter";

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

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function addContact(name, number) {
    const existingContact = contacts.find((contact) => contact.name === name);
    if (existingContact) {
      alert("Contact " + name + " is already exist");
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(newContact);

    setContacts((prevContact) => [newContact, ...prevContact]);
  }

  function removeContact(id) {
    setContacts((prevContact) =>
      prevContact.filter((contact) => contact.id !== id)
    );

    console.log("yes");
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
