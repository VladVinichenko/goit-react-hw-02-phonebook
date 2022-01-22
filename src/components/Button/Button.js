import { Children } from "react"
import s from './Button.module.css'

const Button = ({ name, onLeaveFeedback }) => {
  return (
    <button className={s.button} name={name} onClick={onLeaveFeedback}> {name}</button >
  )
}

export default Button;
