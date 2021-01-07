import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { FaRegTimesCircle } from 'react-icons/fa';

function ContactList({ contacts, onDeleteContacts }) {
  return (
    <>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <p className={styles.contact}>
              {name} : {number}
            </p>
            <button
              className={styles.btn}
              type="button"
              onClick={() => onDeleteContacts(id)}
            >
              <FaRegTimesCircle className={styles.icon} />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactList;