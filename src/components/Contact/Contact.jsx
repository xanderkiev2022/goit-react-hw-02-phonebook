// import PropTypes from 'prop-types';

export default function Contact({ id, name, number }) {
  return (
      <div>
        <div>
          <span>{name}: </span>
          <span>{number}</span>
        </div>
        {/* <Button type="button" onClick={() => deleteContact(contactId)}>Delete</Button> */}
      </div>
  );
}