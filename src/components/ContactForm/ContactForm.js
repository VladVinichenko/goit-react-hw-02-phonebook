import s from './ContactForm.module.css'
import Input from '../Input/Input';
import Button from '../Button/Button'

const ContactForm = ({ onAddContact }) => {
  return (
    <div className={s.boxForm}>
      <Input name="name">Name</Input>
      <Button name='addContact' action={onAddContact}>Add contact</Button>
    </div>


  )
}

export default ContactForm;
