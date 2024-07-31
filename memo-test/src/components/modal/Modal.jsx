import "./modal.css";

import { useState } from "react";

import { MODAL_TYPES } from "../../common/constants/modalTypes";

import { Button } from "../button/Button";

export const Modal = ({
  item = {},
  type = MODAL_TYPES.Create,
  onClose = () => console.log("close"),
  onSubmitCreate = () => console.log("submit create"),
  onSubmitEdit = () => console.log("submit edit"),
  onSubmitDelete = () => console.log("submit delete"),
}) => {
  const [formData, setFormData] = useState({
    title: item.Title ?? "",
    description: item.Description ?? "",
    imageUrl: item.ImageURL ?? "",
  });

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onCreate = async () => {
    await onSubmitCreate({
      title: formData.title,
      description: formData.description,
      imageUrl: formData.imageUrl,
    });
  };

  const onEdit = async () => {
    await onSubmitEdit(
      {
        title: formData.title,
        description: formData.description,
        imageUrl: formData.imageUrl,
      },
      item.GroupId
    );
  };

  const onDelete = async () => {
    await onSubmitDelete(item.GroupId);
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
        {type === MODAL_TYPES.Delete && (
          <div>
            <h3>delete group {item.GroupId}</h3>
            <p>
              you are about to delete{" "}
              <strong className="strong">{item.Title}</strong>. this cannot be
              undone. are you sure you would like to proceed?
            </p>
            <Button style="danger" body="delete" action={onDelete}></Button>
            <Button style="cancel" body="close" action={onClose}></Button>
          </div>
        )}
        {type === MODAL_TYPES.Edit && (
          <div>
            <h3>edit group {item.GroupId}</h3>
            <form className="form">
              <label className="form-label" htmlFor="title">
                new group title
                <input
                  name="title"
                  type="text"
                  placeholder="group title"
                  value={formData.title}
                  onChange={handleFieldChange}
                />
              </label>
              <label className="form-label" htmlFor="description">
                new group description
                <textarea
                  name="description"
                  type="textarea"
                  placeholder="group description"
                  value={formData.description}
                  onChange={handleFieldChange}
                />
              </label>
              <label className="form-label" htmlFor="imageUrl">
                new group image url
                <input
                  name="imageUrl"
                  type="text"
                  placeholder="group image url"
                  value={formData.imageUrl}
                  onChange={handleFieldChange}
                />
              </label>
            </form>
            <Button body="submit" action={onEdit}></Button>
            <Button style="cancel" body="close" action={onClose}></Button>
          </div>
        )}
        {type === MODAL_TYPES.Create && (
          <div>
            <h3>new group</h3>
            <form className="form">
              <label className="form-label" htmlFor="title">
                group title
                <input
                  name="title"
                  type="text"
                  placeholder="group title"
                  value={formData.title}
                  onChange={handleFieldChange}
                />
              </label>
              <label className="form-label" htmlFor="description">
                group description
                <textarea
                  name="description"
                  type="textarea"
                  placeholder="group description"
                  value={formData.description}
                  onChange={handleFieldChange}
                />
              </label>
              <label className="form-label" htmlFor="imageUrl">
                group image url
                <input
                  name="imageUrl"
                  type="text"
                  placeholder="group image url"
                  value={formData.imageUrl}
                  onChange={handleFieldChange}
                />
              </label>
            </form>
            <Button style="create" body="create" action={onCreate}></Button>
            <Button style="cancel" body="close" action={onClose}></Button>
          </div>
        )}
      </div>
    </div>
  );
};
