import React from 'react';
import { connect } from 'react-redux';
import { contactsActions } from '../../redux/contacts';
import './Filter.css';

function Filter ({onSearch}) {
        return (
            <div className="Filter">
                <h3 className="Filter__title">Find contacts by name</h3>
                <input
                    type="text"
                    name="search"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={onSearch}
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