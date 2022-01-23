import s from './DeleteButton.module.css'

const DeleteButton = ({onDeleteContact}) => {
  const onDeleteContact2 = () => {
    console.log('delete');
  }
  return (
    <button className={s.button} onClick={onDeleteContact2}>Delete</button>
  )
}

export default DeleteButton;
