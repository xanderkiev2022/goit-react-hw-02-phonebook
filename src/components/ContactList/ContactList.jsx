// import PropTypes from 'prop-types';

import {Contact} from 'components/Contact/Contact';

export function ContactList({ contacts, deleteContact }) {
    console.log (contacts)
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        console.log (name)
        return (
          <li key={id}>
            <Contact name={name} number={number} id={id} deleteContact={deleteContact}/>
          </li>
        );
      })}
    </ul>
  );
}