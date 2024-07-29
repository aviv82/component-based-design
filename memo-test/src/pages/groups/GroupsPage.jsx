import { Link } from "react-router-dom";
import "./groupsPage.css";

import { useLoaderData } from "react-router";
import { Button } from "../../components/button/Button";
import { Plus } from "../../assets/svgs/plus/Plus";
import { useState } from "react";
import { Modal } from "../../components/modal/Modal";
import { create } from "../../services/groupServices";

export const GroupsPage = () => {
  const groups = useLoaderData();

  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const handleCreateNewGroup = async (newGroupRequest = {}) => {
    const result = await create(newGroupRequest);
    console.log(result.data);
    toggleModal();
    return;
  };

  return (
    <div className="groups-page">
      {/* <pre>{JSON.stringify(groups, null, 2)}</pre> */}
      {isModal && (
        <Modal onClose={toggleModal} onSubmit={handleCreateNewGroup} />
      )}
      <Button style="icon" body={<Plus />} action={toggleModal}></Button>
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
