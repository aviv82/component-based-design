import "./favorite-list.css";

export const FavoriteList = ({ header = "fave", itemsToList = [] }) => {
  return (
    <div className="fav-list">
      <h3>{header}</h3>
      <ul>
        {itemsToList.map((item, i) => (
          <li key={i}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};
