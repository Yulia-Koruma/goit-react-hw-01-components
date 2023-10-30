import { StatisticsSection, TitleBox, StatisticsTitle, StatsList, StatsItem, StatsPercentages, StatsLabel } from "./Statistics.styled";

export const Statistic = ({stats, title}) => {
return (

<StatisticsSection>

  <TitleBox>
 {title && <StatisticsTitle>{title}</StatisticsTitle>}
  </TitleBox>

  <StatsList>
    {stats.map((item, i) => 

    ( <StatsItem key={item.id} id={item.id} index={i}>
      <StatsLabel>{item.label}</StatsLabel>
      <StatsPercentages>{item.percentage}%</StatsPercentages>
    </StatsItem>))}
    
  </StatsList>
</StatisticsSection>
);
};