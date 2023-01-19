// import PropTypes from 'prop-types';

import {Contact} from 'components/Contact/Contact';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact name={name} number={number} id={id} deleteContact={deleteContact}/>
          </li>
        );
      })}
    </ul>
  );
}