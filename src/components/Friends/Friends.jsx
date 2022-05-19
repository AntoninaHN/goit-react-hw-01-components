import styles from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendItem from './FriendItem';

function FriendsList({ friends }) {
  const friend = friends.map(friend => (
    <FriendItem
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
      key={friend.id}
    />
  ));
  return <ul className={styles.friends}>{friend}</ul>;
}

FriendsList.defaultProps = {
  friends: [],
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
export default FriendsList;

// List.defaultProps = {
//   items: [],
// };
// List.propTypes = {
//     title: PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired
//     }))
