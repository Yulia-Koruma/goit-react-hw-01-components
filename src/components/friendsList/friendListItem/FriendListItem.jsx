import {FriendItem, FriendStatus, FriendAvatar, FriendName } from './FriendListItem.styled'

export const FriendsListItem = ({avatar, name, isOnline}) => {
    return(
        <FriendItem className="item">
      <FriendStatus className="status">{isOnline}</FriendStatus>
      <FriendAvatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName className="name">{name}</FriendName>
    </FriendItem>
    )}