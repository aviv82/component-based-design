import { Link } from "react-router-dom";
import "./groupsPage.css";

import { useLoaderData } from "react-router";
import { Button } from "../../components/button/Button";
import { Plus } from "../../assets/svgs/plus/Plus";
import { useRef, useState } from "react";
import { Modal } from "../../components/modal/Modal";
import { create, update } from "../../services/groupServices";
import { Edit } from "../../assets/svgs/edit/Edit";
import { MODAL_TYPES } from "../../common/constants/modalTypes";

export const GroupsPage = () => {
  const groups = useLoaderData();

  const [isModal, setIsModal] = useState(false);

  const modalType = useRef(MODAL_TYPES.Create);
  const selectedGroup = useRef({});

  const toggleModal = (type = MODAL_TYPES.Create, item = {}) => {
    modalType.current = type;
    selectedGroup.current = item;
    setIsModal(!isModal);
  };

  const handleCreateNewGroup = async (newGroupRequest = {}) => {
    const result = await create(newGroupRequest);
    console.log(result.data);
    toggleModal();
    return;
  };

  const handleUpdateGroup = async (updateRequest = {}, id = 0) => {
    const result = await update(updateRequest, id);
    console.log(result.data);
    toggleModal();
    return;
  };

  return (
    <div className="groups-page">
      {/* <pre>{JSON.stringify(groups, null, 2)}</pre> */}
      {isModal && (
        <Modal
          item={selectedGroup.current}
          type={modalType.current}
          onClose={toggleModal}
          onSubmitCreate={handleCreateNewGroup}
          onSubmitEdit={handleUpdateGroup}
        />
      )}
      <Button
        style="icon"
        body={<Plus />}
        action={() => {
          toggleModal(MODAL_TYPES.Create, {});
        }}
      ></Button>
      {!groups.data ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {groups.data.map((g, i) => (
            <li className="list-li" key={i}>
              <div className="list-item-wrap">
                <div className="list-info">
                  <Link to={`/groups/${g.GroupId}`}>{g.Title}</Link>
                  {/* <p>{g.Description}</p> */}
                  <p>{g.ImageURL}</p>
                </div>
                <div className="list-button-section">
                  <Button
                    action={() => {
                      toggleModal(MODAL_TYPES.Edit, g);
                    }}
                    style="icon"
                    body={<Edit />}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
