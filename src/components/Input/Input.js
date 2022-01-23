import s from './Input.module.css'
import { Fragment } from 'react/cjs/react.production.min';
const Input = ({ name, children, inputData, tel }) => {
  return (
    <Fragment>
      <p className={s.name}>{children}</p>

      {!tel ? <input className={s.input}
        onChange={inputData}
        name={name}
        required
      /> : <input className={s.input}
        onChange={inputData}
        name={name}
        type="tel"
        pattern="\+?\d{1, 4}?[-.\s]?\(?\d{1, 3}?\)?[-.\s]?\d{1, 4}[-.\s]?\d{1, 4}[-.\s]?\d{1, 9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />}
    </Fragment>
  )
}

export default Input;
