import s from './ContactList.module.css'
import { nanoid } from 'nanoid';
import DeleteButton from '../DeleteButton/DeleteButton';

const ContactList = ({ list }) => {
  console.log(list);
  return (
    <ul className={s.list}>
      {list.map(item => <li key={nanoid()} className={s.item}>
        {/* <div className={s.text}> */}
        <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
        {/* </div> */}
        <DeleteButton />
      </li>)}
    </ul>
  )
}

export default ContactList;
