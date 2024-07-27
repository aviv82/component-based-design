import { Link } from "react-router-dom";
import "./groupsPage.css";

import { useLoaderData } from "react-router";

export const GroupsPage = () => {
  const groups = useLoaderData();

  return (
    <div className="groups-page">
      {/* <pre>{JSON.stringify(groups, null, 2)}</pre> */}
      {!groups.data ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {groups.data.map((g, i) => (
            <li key={i}>
              <div>
                <Link to={`/groups/${g.GroupId}`}>{g.Title}</Link>
                {/* <p>{g.Description}</p> */}
                <p>{g.ImageURL}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
