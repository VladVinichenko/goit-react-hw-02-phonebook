import s from './DeleteButton.module.css'

const DeleteButton = ({ onDeleteContact }) => {
  return (
    <button className={s.button} onClick={onDeleteContact}>Delete</button>
  )
}

export default DeleteButton;
