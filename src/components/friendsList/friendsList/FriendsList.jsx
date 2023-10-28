import { FriendsListItem } from '../friendListItem/FriendListItem'
import { FriendList, FriendSection } from "./FriendsList.styled"

export const FriendsList = ({friends}) => {
return(
  <FriendSection>
    <FriendList>
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
</FriendList>
</FriendSection>
);
};

