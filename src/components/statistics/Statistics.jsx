export const Statistic = ({elements}) => {
return (

<section className="statistics">
  <h2 className="title">Upload stats</h2>
  
  <ul className="stat-list">
    {elements.map((item, i) => 

    ( <li className="item" key={item.id} id={item.id} index={i}>
      <span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
    </li>))}
    
  </ul>
</section>
);
};