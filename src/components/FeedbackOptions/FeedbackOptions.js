import { Fragment } from "react/cjs/react.production.min"
import s from './FeedbackOptions.module.css'
import Button from "../Button/Button";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options)
  return (
    <Fragment>
      <div className={s.buttonBox}>
        {keys.map(key =>
          <Button name={key} onLeaveFeedback={onLeaveFeedback} key={key} />
        )}
      </div>
    </Fragment>
  )
}

export default FeedbackOptions