import "./bad-list.css";

export const BadList = ({ header = "bad", itemsToList = [] }) => {
  return (
    <div className="bad-list">
      <h3>{header}</h3>
      <ul>
        {itemsToList.map((item, i) => (
          <li key={i}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};
