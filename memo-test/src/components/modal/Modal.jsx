import { useState } from "react";
import { Button } from "../button/Button";
import "./modal.css";

export const Modal = ({
  type = "create",
  onClose = () => console.log("close"),
  onSubmit = () => console.log("submit"),
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onCreate = async () => {
    await onSubmit({
      title: formData.title,
      description: formData.description,
      imageUrl: formData.imageUrl,
    });
  };

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        {type === "create" && (
          <div>
            <h3>new group</h3>
            <form className="form">
              <label htmlFor="title">
                <input
                  name="title"
                  type="text"
                  placeholder="group title"
                  value={formData.title}
                  onChange={handleFieldChange}
                />
                group title
              </label>
              <label htmlFor="description">
                <textarea
                  name="description"
                  type="textarea"
                  placeholder="group description"
                  value={formData.description}
                  onChange={handleFieldChange}
                />
                group description{" "}
              </label>
              <label htmlFor="imageUrl">
                <input
                  name="imageUrl"
                  type="text"
                  placeholder="group image url"
                  value={formData.imageUrl}
                  onChange={handleFieldChange}
                />
                group image url
              </label>
            </form>
            <Button body="create" action={onCreate}></Button>
            <Button style="cancel" body="close" action={onClose}></Button>
          </div>
        )}
      </div>
    </div>
  );
};
