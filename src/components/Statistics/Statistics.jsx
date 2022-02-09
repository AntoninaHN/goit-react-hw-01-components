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

Statistics.defaultProps = {
  stats: [],
};

Statistics.prototype = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
