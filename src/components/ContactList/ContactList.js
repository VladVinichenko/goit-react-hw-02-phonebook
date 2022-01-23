import s from './ContactList.module.css'
import DeleteButton from '../DeleteButton/DeleteButton';

const ContactList = ({ renderList, onDeleteContact }) => {
  console.log(renderList.length > 0);
  return renderList.length > 0 ? (<ul className={s.list}>
    {renderList.map((item) =>
      <li key={item.id} id={item.id} className={s.item}>
        <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
        <DeleteButton onDeleteContact={onDeleteContact} />
      </li>
    )}
  </ul>) : (<p className={s.text}>no results</p>)



}

export default ContactList;
