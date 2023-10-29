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
&:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;}
`;

export const FriendStatus = styled.span`
  display: block;
  margin: 0px 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'red' : 'green';
  }};
`;

export const FriendAvatar = styled.img`
display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const FriendName = styled.p`
  margin-left: 10px;
  color: #402727;
  text-shadow: 1px 1px 1px #fff;
  font-size: 16px;
  font-weight: 700;
`;