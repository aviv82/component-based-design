import "./errorPage.css";

import { useRouteError } from "react-router-dom";

import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/nav-bar/NavBar";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <NavBar />
      <h2>Some shit went down</h2>
      <p>{error.statusCode || 500}</p>
      <p>{error.message || "An unknown error occurred"}</p>
      <Footer />
    </div>
  );
};
