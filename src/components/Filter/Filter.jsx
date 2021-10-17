import React from 'react';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import { contactsActions } from '../../redux/contacts';
import './Filter.css';

function Filter ({onSearch}) {
        return (
            <div className="Filter">
                <h4 className="Filter__title">Find contacts by name</h4>
                {/* <input
                    type="text"
                    name="search"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={onSearch}
                /> */}
                <TextField
                    label="Name"
                    variant="standard"
                    className="LoginForm__input"
                    type="name"
                    name="name"
                    id="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={onSearch}
                    sx={{
                       '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        '& .MuiInput-root:before': {
                            borderBottom: "1px solid white"
                        },
                        '& .MuiInput-root:hover:not(.Mui-disabled):before': {
                            borderBottom: "2px solid white"
                        },
                        '& .MuiInput-root:after': {
                            borderBottom: "2px solid rgb(149, 241, 206)"
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: 'rgb(149, 241, 206)'
                        },
                        '& .MuiFormLabel-asterisk': {
                            display: 'none'
                        },
                        '& .MuiInput-root': {
                            color: 'white'
                        }
                    }}
                    autoComplete="none"
                />
            </div>
        )
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (e) => dispatch(contactsActions.searchContact(e)),
  }
}

export default connect(null, mapDispatchToProps)(Filter);