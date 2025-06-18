import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../redux/contactsOperations';

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleFilterChange = ({ target }) => setFilter(target.value);

  const filteredContacts = items.filter(contact =>
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
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {filteredContacts.map(item => (
          <li key={item.id}>
            {item.name}: {item.number}{' '}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
