import "./button.css";

export const Button = ({
  type = "button",
  style = "prime",
  body = "Ok",
  action = () => console.log("click"),
}) => {
  return (
    <button type={type} className={`btn ${style}`} onClick={action}>
      {body}
    </button>
  );
};
