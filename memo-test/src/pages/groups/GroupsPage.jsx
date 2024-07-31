import "./groupsPage.css";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { useLoaderData } from "react-router";

import { MODAL_TYPES } from "../../common/constants/modalTypes";

import {
  create,
  deleteGroup,
  getAll,
  update,
} from "../../services/groupServices";

import { Button } from "../../components/button/Button";
import { Plus } from "../../assets/svgs/plus/Plus";
import { Modal } from "../../components/modal/Modal";
import { Edit } from "../../assets/svgs/edit/Edit";
import { Delete } from "../../assets/svgs/delete/Delete";

export const GroupsPage = () => {
  // const loadData = useLoaderData();

  const [isModal, setIsModal] = useState(false);
  const [groups, setGroups] = useState([]);

  const modalType = useRef(MODAL_TYPES.Create);
  const selectedGroup = useRef({});

  useEffect(() => {
    loadGroups();
  }, []);

  useEffect(() => {
    if (isModal) return;
    loadGroups();
  }, [isModal]);

  const loadGroups = async () => {
    const data = await getAll();
    setGroups(data.data);
  };

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

  const handleDeleteGroup = async (id = 0) => {
    const result = await deleteGroup(id);
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
          onSubmitDelete={handleDeleteGroup}
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
                    action={() => toggleModal(MODAL_TYPES.Edit, g)}
                    style="icon"
                    body={<Edit />}
                  />
                  <Button
                    action={() => toggleModal(MODAL_TYPES.Delete, g)}
                    style="icon"
                    body={<Delete />}
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
