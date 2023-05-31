import styles from "./ContactList.module.css";

import Button from "../Button/Button";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li className={styles.item} key={contact.id} id={contact.id}>
          <p className={styles.text}>
            {contact.name} : {contact.number}
          </p>
          <Button onClick={() => onDelete(contact.id)}>Remove</Button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
