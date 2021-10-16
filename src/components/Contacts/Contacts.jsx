import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { contactsOperations } from '../../redux/contacts';
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import './Contacts.css';

function Contacts () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch])

  return (
      <div className="Contacts">
        <h2 className="Contacts_header">Phonebook</h2>
        <ContactForm />
        <h3 className="Contacts_header2">Contacts</h3>
        <Filter />
        <ContactList />
      </div>
    )
}

export default Contacts;