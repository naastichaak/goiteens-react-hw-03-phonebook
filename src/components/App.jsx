import { useState } from "react";

import { nanoid } from "nanoid";

import ContactList from "./ContactList/ContactList";
import ContactEditor from "./ContactEditor/ContactEditor";
import Filter from "./Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  function addContact(name, number) {
    const existingContact = contacts.find((contact) => contact.name === name);
    if (existingContact) {
      alert("Contact already exist");
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
