// import PropTypes from 'prop-types';

export function Contact({id, name, number, deleteContact}) {
  return (
      <div>
        <div>
          <span>{name}: </span>
          <span>{number}</span>
        </div>
        <button type="button" onClick={() => deleteContact(id)}>Delete</button>
      </div>
  );
}