import { Link } from "react-router-dom";
import "./membersPage.css";

import { useLoaderData } from "react-router";

export const MembersPage = () => {
  const members = useLoaderData();

  return (
    <div className="members-page">
      {/* <pre>{JSON.stringify(members, null, 2)}</pre> */}
      {!members.data ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {members.data.map((m, i) => (
            <li key={i}>
              <div>
                <Link to={`/members/${m.MemberId}`}>{m.NickName}</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
