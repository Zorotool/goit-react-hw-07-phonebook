import React from "react";
import PropTypes from 'prop-types';
import ContactItem from "components/ContactItem";


const ContactList = ({ filtredContacts,onDeleteContact }) => (
    <ul>
        {filtredContacts.map(contact => (
            <ContactItem key={contact.idKey} contact={contact} onDeleteContact={onDeleteContact}/>    
        ))}
        </ul>
);
    
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape),
};

export default ContactList;