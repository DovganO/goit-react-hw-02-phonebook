import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    <p className={styles.contacts}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={value}
      />
    </p>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;