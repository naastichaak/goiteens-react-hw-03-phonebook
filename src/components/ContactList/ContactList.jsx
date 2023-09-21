import styles from "./ContactList.module.css";

import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button/Button";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      <AnimatePresence>
        {contacts.map((contact) => (
          <motion.li
            initial={{
              opacity: 0,
              translateX: "-100%",
            }}
            animate={{
              opacity: 1,
              translateX: 0,
            }}
            exit={{
              opacity: 0,
              translateX: "100%",
            }}
            transition={{
              duration: 3,
            }}
            className={styles.item}
            key={contact.id}
            id={contact.id}
          >
            <p className={styles.text}>
              {contact.name} : {contact.number}
            </p>
            <Button onClick={() => onDelete(contact.id)}>Remove</Button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default ContactList;
