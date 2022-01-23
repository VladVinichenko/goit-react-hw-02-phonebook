import s from './ContactList.module.css'
import DeleteButton from '../DeleteButton/DeleteButton';

const ContactList = ({ renderList, onDeleteContact }) => {
  console.log(renderList);
  return (<ul className={s.list}>
    {renderList.map((item) =>
      <li key={item.id} id={item.id} className={s.item}>
        <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
        <DeleteButton onDeleteContact={onDeleteContact} />
      </li>
    )}
  </ul>)



  // { onFilterChange > 0 ? (<ul className={s.list}>
  //   {onFilterChange.map(item => <li key={item.id} id={item.id} className={s.item}>
  //     <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
  //     <DeleteButton onDeleteContact={onDeleteContact} />
  //   </li>)}
  // </ul>) : (<ul className={s.list}>
  //   {list.map(item => <li key={item.id} id={item.id} className={s.item}>
  //     <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
  //     <DeleteButton onDeleteContact={onDeleteContact} />
  //   </li>)}
  // </ul>)}



}

export default ContactList;
