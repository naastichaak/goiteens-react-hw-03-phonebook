import { useState } from "react";

import { nanoid } from "nanoid";

import ContactList from "./ContactList/ContactList";
import ContactEditor from "./ContactEditor/ContactEditor";

function App() {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState([
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]);


  function addContact(name, number) {
    const newContact = {
      id: nanoid(),
      name: name,
      number: +number,
    };
    console.log(newContact);
  }

  // function removeContact() {}

  return (
    <div>
      <h1>PhoneBook</h1>

      <ContactEditor onCreate={addContact} />

      <h1>Contacts</h1>

      <div>
        <ContactList contacts={} onDelete={removeContact} />
      </div>
      {/* <ContactList tasks={tasks} /> */}
    </div>
  );
}
export default App;
