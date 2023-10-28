import styled from 'styled-components';

export const FriendItem = styled.li`
width: 260px;
height: 80px;
box-shadow: 
0px 2px 1px 0px rgba(46, 47, 66, 0.08), 
0px 1px 1px 0px rgba(46, 47, 66, 0.16),
0px 1px 6px 0px rgba(46, 47, 66, 0.08);
display: flex;
align-items: center;
padding: 8px 10px;
`;

export const FriendStatus = styled.span`
  display: block;
  margin: 0px 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`

`;

export const FriendName = styled.p`

`;