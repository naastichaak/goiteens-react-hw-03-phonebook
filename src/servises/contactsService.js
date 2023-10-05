import axios from "axios";

export function getContactsService() {
  return axios.get("http://localhost:3000/contacts").then((res) => res.data);
}

export function addContactsService(name, number) {
  return axios
    .post("http://localhost:3000/contacts", {
      name,
      number,
    })
    .then((res) => res.data);
}

export function removeContactsService(id) {
  return axios
    .delete(`http://localhost:3000/contacts/${id}`)
    .then((res) => res.data);
}
