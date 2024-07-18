import "./homePage.css";

export const HomePage = ({ header = "" }) => {
  return <h1 className="home-header">{header}</h1>;
};
