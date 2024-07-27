import "./groupDetailsPage.css";

import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { getById } from "../../services/groupServices";

export const GroupDetailsPage = () => {
  const params = useParams();
  const [group, setGroup] = useState({});

  useEffect(() => {
    getGroup();
  }, []);

  const getGroup = async () => {
    const request = await getById(params.id);
    setGroup(request.data);
  };

  return (
    <div className="group-details-page">
      {/* <pre>{JSON.stringify(group, null, 2)}</pre> */}
      {group.data && (
        <div>
          <h4>{group.data.Title}</h4>
          <p>{group.data.Description}</p>
          <p>{group.data.ImageURL}</p>
        </div>
      )}
    </div>
  );
};
