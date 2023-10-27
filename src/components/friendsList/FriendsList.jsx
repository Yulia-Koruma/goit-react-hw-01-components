import { FriendsListItem } from "./FriendListItem"

export const FriendsList = ({friends}) => {
return(
    <ul className="friend-list">
      {
        friends.map(friend => (
          <FriendsListItem
          key={friend.id}
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}/>
      )
      )
    }
</ul>
);
};

