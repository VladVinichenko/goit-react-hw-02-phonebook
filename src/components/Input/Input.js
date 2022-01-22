import s from './Input.module.css'
import { Fragment } from 'react/cjs/react.production.min';
const Input = ({ name, children }) => {
  return (
    <Fragment>
      <p className={s.name}>{children}</p>
      <input className={s.input}
        type="tel"
        name={name}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Fragment>
  )
}

export default Input;
