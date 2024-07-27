import { Link, useParams } from "react-router-dom";
import "./groupDetailsPage.css";
import { useEffect } from "react";

export const GroupDetailsPage = () => {
  const data = useParams();

  useEffect(() => {
    console.log(data.id);
  });

  return (
    <div className="group-details-page">
      <h4>group details page {data.id}</h4>
      <Link to={`/groups`}>back to groups</Link>
    </div>
  );
};
