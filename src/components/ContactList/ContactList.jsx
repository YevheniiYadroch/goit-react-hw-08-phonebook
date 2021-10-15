import React from 'react';
import ContactListElement from "./ContactListElement";
import { getContacts, getFilter } from "../../redux/contacts/contacts-selectors";
import { connect } from 'react-redux';
import { contactsActions } from '../../redux/contacts';
import './ContactList.css';

function ContactList({ contacts, filter, onDelete }) {
    const list = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    return (
        <ul className="ContactList">
            {list.map(item => (
                <li className="ContactList__item" key={item.id}>
                    <ContactListElement props={item} />
                    <button className="ContactList__button" data-id={item.id} onClick={onDelete} type="button">Delete</button>
                </li>
            ))}
        </ul>
    )
    
}

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
    filter: getFilter(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (e) => dispatch(contactsActions.deleteContact(e)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);