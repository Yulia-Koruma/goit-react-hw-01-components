import {Profile} from '../components/profile/Profile';
import user from '../data/user.json';

import {Statistic}  from '../components/statistics/Statistics';
import data from '../data/data.json';

import { FriendsList } from 'components/friendsList/FriendsList';
import friend from '../data/friends.json'

import { TransactionHistory } from './transactions/TransactionHistory';
import item from '../data/transactions.json';


export const App = () => {
  return (
    <>
    <h1>
    Social network
    </h1>
    <div>
      <h2>
        Profile
      </h2>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
    </div>
    <div>
      <h2>
      Statistics
      </h2>
      <Statistic elements={data}
      />
    </div>
    <div>
      <h2>
      Statistics
      </h2>
      <FriendsList friends={friend}
      />
    </div>
    <div>
      <h2>
      Statistics
      </h2>
      <TransactionHistory items={item}
      />
    </div>
    </>
  );
};



