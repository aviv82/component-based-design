import "./groupsPage.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAll } from "../../services/groupService";

export const GroupsPage = () => {
  const [groups, setGroups] = useState({});

  useEffect(() => {
    getGroups();
  }, []);

  const getGroups = async () => {
    const groups = await getAll();
    setGroups(groups.data);
  };

  return (
    <div className="groups-page">
      {/* <pre>{JSON.stringify(groups, null, 2)}</pre> */}
      {!groups.data ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h3>groups:</h3>
          {groups.data.map((g, i) => (
            <div key={i}>
              <Link to={`/groups/${g.GroupId}`}>{g.Title}</Link>
              <p>{g.Description ?? ""}</p>
              <p>{g.ImageURL ?? ""}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
