import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  const stat = stats.map(item => (
    <li className={styles.statsItem} key={item.id}>
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  ));
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{stat}</ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Statistics;

// title: PropTypes.string.isRequired - если он обязателен, то почему в компоненте у тебя написано:

// {title && <h2 className={styles.title}>{title}</h2>}

// проп stats не должен быть обязательным, потому что у тебя уже есть defaultProps для него. Сначала выполняются defaultProps, а потом проверка через propTypes. То есть если stats не передали, то он будет установлен в [], и потому isRequired не нужен.
