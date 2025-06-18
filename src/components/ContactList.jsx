import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleFilterChange = ({ target }) => setFilter(target.value);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <div>
      <label>
        Find contact by name
        <input
          type="text"
          placeholder="Search by name"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
