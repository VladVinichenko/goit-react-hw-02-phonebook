import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import s from './Phonebook.module.css'

const Phonebook = ({ onAddContact, onInputName, onInputTel, onInputFilter, onDeleteContact, renderList }) => {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} onInputName={onInputName} onInputTel={onInputTel} />
      <h2 className={s.title}>Contacts</h2>
      <Filter onInputFilter={onInputFilter} />
      {renderList.length > 0 && (
        <ContactList renderList={renderList} onDeleteContact={onDeleteContact} />
      )}
    </div>
  )
}

export default Phonebook;
