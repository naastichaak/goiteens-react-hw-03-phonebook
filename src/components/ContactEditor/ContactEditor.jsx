import { useState } from "react";

import styles from "./ContactEditor.module.css";
import Button from "../Button/Button";

function ContactEditor({ onAddContact, value }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddContact(name, number);
    setName("");
    setNumber("");
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h3>Name</h3>

      <input
        name="name"
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        type="text"
        placeholder="Enter name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Number</h3>

      <input
        name="name"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        type="tel"
        placeholder="Enter number"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <br />

      <Button type="submit">Add contact</Button>
    </form>
  );
}

export default ContactEditor;
