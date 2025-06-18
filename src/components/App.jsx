import { Section } from './Section';
import { PhonebookInput } from './PhonebookInput';
import { ContactList } from './ContactList';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <PhonebookInput />
      </Section>
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>
  );
};
