import styles from './Transactions.module.css';
import PropTypes from 'prop-types';

function Transactions({ items }) {
  const item = items.map(item => (
    <tr className={styles.item} key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
  return (
    <table className={styles.transactions}>
      <thead>
        <tr className={styles.table}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{item}</tbody>
    </table>
  );
}

Transactions.defaultProps = {
  items: [],
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
