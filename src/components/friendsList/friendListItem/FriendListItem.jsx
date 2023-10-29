import {FriendItem, FriendStatus, FriendAvatar, FriendName } from './FriendListItem.styled'

export const FriendsListItem = ({avatar, name, isOnline}) => {
    return(
        <FriendItem>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="40" />
      <FriendName>{name}</FriendName>
    </FriendItem>
    )}