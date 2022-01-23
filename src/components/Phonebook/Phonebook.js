import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList";
import s from './Phonebook.module.css'

const Phonebook = ({ onAddContact, state, onInputName, onInputTel }) => {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} onInputName={onInputName} onInputTel={onInputTel} />

      <h2 className={s.title}>Contacts</h2>
      {/* <Filter /> */}
      {state.contacts.length > 0 && (
        <ContactList list={state.contacts} />
      )}
    </div>
  )
}

export default Phonebook;
