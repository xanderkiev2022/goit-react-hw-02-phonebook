// import PropTypes from 'prop-types';

export function Filter({ value, changeFilter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={changeFilter} />
      </label>
    </div>
  );
}
