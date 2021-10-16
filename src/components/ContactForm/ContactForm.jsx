import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { pushContact } from '../../redux/contacts/contacts-operations';
import TextField from '@mui/material/TextField';
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
        const contact = {
            name: name,
            number: number,
        }
        const form = e.target;
        if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`);
            form.reset();
            return;
        }
        dispatch(pushContact(contact));
        form.reset();
    }

        return (
            <form className="ContactForm" onReset={handleFormReset} onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    variant="standard"
                    className="LoginForm__input"
                    value={name}
                    type="name"
                    name="name"
                    id="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={handleChange}
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        '& .MuiInput-root:before': {
                            borderBottom: "1px solid white"
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': {
                            borderBottom: "2px solid white"
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root:after': {
                            borderBottom: "2px solid rgb(149, 241, 206)"
                        },
                        '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                            color: 'rgb(149, 241, 206)'
                        },
                        '& .css-wgai2y-MuiFormLabel-asterisk': {
                            display: 'none'
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root': {
                            color: 'rgb(149, 241, 206)'
                        }
                    }}
                    autoComplete="none"
                />
                <TextField
                    label="Number"
                    variant="standard"
                    className="LoginForm__input"
                    value={number}
                    type="number"
                    name="number"
                    id="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleChange}
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        '& .MuiInput-root:before': {
                            borderBottom: "1px solid white"
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': {
                            borderBottom: "2px solid white"
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root:after': {
                            borderBottom: "2px solid rgb(149, 241, 206)"
                        },
                        '& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
                            color: 'rgb(149, 241, 206)'
                        },
                        '& .css-wgai2y-MuiFormLabel-asterisk': {
                            display: 'none'
                        },
                        '& .css-1480iag-MuiInputBase-root-MuiInput-root': {
                            color: 'rgb(149, 241, 206)'
                        }
                    }}
                    // autoComplete="none"
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