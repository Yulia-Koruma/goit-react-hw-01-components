import styled from 'styled-components';

export const Table = styled.table`
max-width: 90%;
width: 90%;
margin: 0 auto;
padding: 30px 30px;

`;

export const TableTitle = styled.thead`
  background-color: #3bddf6;;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  height: 30px;
  text-align: center;
  
`;

export const Tr = styled.tr`
text-align: center;
background-color: ${props =>
    props.idx % 2 === 0 ? '' : 'transparent'};
outline: 0.5px solid #A8A8A8;
height: 30px;
font-size: 14px;
`;

export const TdType = styled.td`

`;

export const Td = styled.td`
outline: 0.5px solid #A8A8A8;
`;


export const TBody= styled.td`

`;

export const TrBody= styled.td`

`;
