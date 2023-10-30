import { GlobalStyle } from './GlobalStyle';

import {Profile} from '../components/profile/Profile';
import user from '../data/user.json';

import {Statistic}  from '../components/statistics/Statistics';
import data from '../data/data.json';

import { FriendsList } from '../components/friendsList/friendsList/FriendsList';
import friend from '../data/friends.json'

import { TransactionHistory } from './transactions/TransactionHistory';
import item from '../data/transactions.json';


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data}
      />
      <FriendsList friends={friend}
      />
      <TransactionHistory items={item}
      />
      <GlobalStyle />
    </>
  );
};



