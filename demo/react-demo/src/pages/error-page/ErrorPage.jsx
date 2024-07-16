import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page" className="error-page">
      <h2>woops</h2>
      <p>an unexpected error occurred</p>
      <i>{error.statusText || error.message}</i>
    </div>
  );
};
