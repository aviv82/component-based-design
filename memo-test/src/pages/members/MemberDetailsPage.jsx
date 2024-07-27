import "./memberDetailsPage.css";

import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { getById } from "../../services/memberServices";

export const MemberDetailsPage = () => {
  const params = useParams();
  const [member, setMember] = useState({});

  useEffect(() => {
    getMember();
  }, []);

  const getMember = async () => {
    const request = await getById(params.id);
    setMember(request.data);
  };

  return (
    <div className="member-details-page">
      {/* <pre>{JSON.stringify(member, null, 2)}</pre> */}
      {member.data && (
        <div>
          <h4>{member.data.NickName}</h4>
          <p>{member.data.Bio}</p>
          <p>{member.data.Age}</p>
          <p>{member.data.AvatarURL}</p>
          <p>{member.data.GroupId}</p>
        </div>
      )}
    </div>
  );
};
