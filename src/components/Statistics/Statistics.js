import s from './Statistics.module.css'
import { Fragment } from 'react/cjs/react.production.min'
import StatisticItem from './StatisticItem'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Fragment>
      {total > 0 ? <ul className={s.statList}>
        <StatisticItem value={good}>good</StatisticItem>
        <StatisticItem value={neutral}>neutral</StatisticItem>
        <StatisticItem value={bad}>bad</StatisticItem>
        <StatisticItem value={total}>total</StatisticItem>
        <StatisticItem value={positivePercentage + '%'}>Positive feedback</StatisticItem>
      </ul> : <p className={s.given}>No feedback given</p>}
    </Fragment>

  )
}

export default Statistics;
