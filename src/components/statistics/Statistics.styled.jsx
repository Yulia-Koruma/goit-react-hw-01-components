import styled from 'styled-components';


const getRandomHexColor = 
(index) =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;


export const StatisticsSection = styled.section`
    padding: 30px 0;
    background-color: #F4F4FD;
`;

export const TitleBox = styled.div`
    max-width: 260px;
    background-color: #fff;
    padding: 20px 20px;
    margin: 0 auto;

`;

export const StatisticsTitle = styled.h2`
    color: #a19e9e;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

export const StatsList = styled.ul`
    display: flex;
    max-width: 260px;
    margin: 0 auto;
`;

export const StatsItem = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 8px 10px 8px ;
    color: #fff;
    gap: 10px;
    background-color: ${props => getRandomHexColor(props.index)};
`;

export const StatsLabel = styled.ul`
    font-size: 12px;
    font-weight: 700;
`;

export const StatsPercentages = styled.ul`
    font-size: 14px;
    font-weight: 700;
`;