import { StatisticsSection, TitleBox, StatisticsTitle, StatsList, StatsItem, StatsPercentages, StatsLabel } from "./Statistics.styled";

export const Statistic = ({elements}) => {
return (

<StatisticsSection>
  <TitleBox>
  <StatisticsTitle>Upload stats</StatisticsTitle>
  </TitleBox>
  <StatsList>
    {elements.map((item, i) => 

    ( <StatsItem key={item.id} id={item.id} index={i}>
      <StatsLabel>{item.label}</StatsLabel>
      <StatsPercentages>{item.percentage}%</StatsPercentages>
    </StatsItem>))}
    
  </StatsList>
</StatisticsSection>
);
};