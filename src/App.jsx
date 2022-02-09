import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendsList from './components/Friends';
import Transactions from './components/Transactions';
import data from './data';

function App() {
  return (
    <div>
      <Profile
        username={data.user.username}
        tag={data.user.tag}
        location={data.user.location}
        avatar={data.user.avatar}
        stats={data.user.stats}
      />
      <Statistics title="Upload stats" stats={data.datastat} />
      <Statistics stats={data.datastat} />
      <FriendsList friends={data.friends} />
      <Transactions items={data.transactions} />
    </div>
  );
}

export default App;
