import s from './Statistics.module.css'

const StatisticItem = ({ children, value }) => {
  return (
    <li className={s.statItem}>
      <p className={s.statText}>{children}:</p>
      <p className={s.statValue}>{value}</p>
    </li >
  )
}

export default StatisticItem;
