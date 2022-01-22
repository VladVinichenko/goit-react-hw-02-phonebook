import ContactForm from "../ContactForm/ContactForm"

const Phonebook = ({ onAddContact }) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <h2>Contacts</h2>
      {/* <Filter /> */}
      {/* <ContactList /> */}
    </div>
  )
}

export default Phonebook;
