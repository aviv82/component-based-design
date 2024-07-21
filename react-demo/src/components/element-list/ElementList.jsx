import "./element-list.css";

export const ElementList = ({
  header = "fave",
  itemsToList = [],
  styleName = "",
}) => {
  return (
    <div className={styleName}>
      <h3>{header}</h3>
      <ul>
        {itemsToList.map((item, i) => (
          <li key={i}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};
