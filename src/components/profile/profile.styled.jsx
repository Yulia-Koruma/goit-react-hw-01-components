import styled from 'styled-components';

export const ProfileContainer = styled.section`
background-color: #F4F4FD;
padding: 30px 0;
`;

export const Description = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 260px;
height: 260px;
border-radius: 5px 5px 0px 0px;
margin: 0 auto;
background-color: #fff;
box-shadow: 
0px 2px 1px 0px rgba(46, 47, 66, 0.08), 
0px 1px 1px 0px rgba(46, 47, 66, 0.16),
0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;

export const ProfileImg = styled.img`
border-radius: 50%;
border: 1px solid rgba(15, 12, 12, 0.3);
margin-bottom: 20px;
`;

export const AccentName = styled.p`
font-size: 18px;
font-weight: 700;
color: #000;
margin-bottom: 8px;
`;



export const ProfileText = styled.p`
        color: #A8A8A8;
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 700;
    &:last-child{
        margin-bottom: 0px;
    }

`;

export const StatsList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 260px;
    height: 80px;
    border-radius: 0px 0px 5px 5px;
    margin: 0 auto;
    background-color:  #f7f7f8;
    box-shadow: 
    0px 2px 1px 0px rgba(46, 47, 66, 0.08), 
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 0.5px solid #c9c9eb;;
width: 100%;
height: 100%;
gap: 5px;
`;

export const StatsLabel = styled.span`
        font-size: 12px;
        font-weight: 700;
        color: #A8A8A8;
`;

export const StatsQuantity = styled.span`
        font-size: 14px;
        font-weight: 700;
`;