import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { pushContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import './ContactForm.css';

function ContactForm({ contacts }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const handleFormReset = () => {
        setName('');
        setNumber('');
  }

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        if (name === 'name') {
            setName(value)
        }
        if (name === 'number') {
            setNumber(value)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        if (contacts.some(item => item.name.toLowerCase() === e.target.children.name.value.toLowerCase())) {
            alert(`${e.target.children.name.value} is already in contacts`);
            form.reset();
            return;
        }
        dispatch(pushContact(e));
        form.reset();
    }

        return (
            <form className="ContactForm" onReset={handleFormReset} onSubmit={handleSubmit}>
                <label htmlFor="name" className="ContactForm__name">Name</label>
                <input
                    className="ContactForm__input"
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleChange}
                />
                <label htmlFor="number" className="ContactForm__number">
                    Number
                </label>
                <input
                    className="ContactForm__input"
                    value={number}
                    type="tel"
                    name="number"
                    id="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleChange}
                />
                <button type="submit"  className="ContactForm__button">Add contact</button>
            </form>
        )
}

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
  }
}

export default connect(mapStateToProps, null)(ContactForm);