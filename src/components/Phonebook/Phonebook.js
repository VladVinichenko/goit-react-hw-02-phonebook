import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import s from './Phonebook.module.css'

const Phonebook = ({ onAddContact, state, onInputName, onInputTel, onInputFilter, onDeleteContact, onFilterChange }) => {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} onInputName={onInputName} onInputTel={onInputTel} />

      <h2 className={s.title}>Contacts</h2>
      <Filter onInputFilter={onInputFilter} />
      {state.contacts.length > 0 && (
        <ContactList list={state.contacts} onDeleteContact={onDeleteContact} onFilterChange={onFilterChange} />
      )}
    </div>
  )
}

export default Phonebook;
