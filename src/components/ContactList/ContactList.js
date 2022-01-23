import s from './ContactList.module.css'
import { nanoid } from 'nanoid';
import DeleteButton from '../DeleteButton/DeleteButton';

const ContactList = ({ list, onDeleteContact }) => {
  const onDeleteContact2 = () => {
    console.log('delete');
  }
  return (
    <ul className={s.list}>
      {list.map(item => <li key={item.id} className={s.item}>
        <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
        <DeleteButton onDeleteContact={onDeleteContact2}/>
      </li>)}
    </ul>
  )
}

export default ContactList;
