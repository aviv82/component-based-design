import "./errorPage.css";

import { useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2 className="error-head">some shit went down!</h2>
      <p>{error.statusText || 500}</p>
      <p>{error.message || "An unknown error occurred"}</p>
    </div>
  );
};
