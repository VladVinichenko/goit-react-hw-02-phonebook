import s from './ContactList.module.css'
import { nanoid } from 'nanoid';
import DeleteButton from '../DeleteButton/DeleteButton';

const ContactList = ({ list, onDeleteContact, onFilterChange }) => {
  return
    { onFilterChange > 0 ? (<ul className={s.list}>
      {onFilterChange.map(item => <li key={item.id} id={item.id} className={s.item}>
        <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
        <DeleteButton onDeleteContact={onDeleteContact} />
      </li>)}
    </ul>) : (<ul className={s.list}>
      {list.map(item => <li key={item.id} id={item.id} className={s.item}>
        <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
        <DeleteButton onDeleteContact={onDeleteContact} />
      </li>)}
    </ul>)}



}

export default ContactList;
