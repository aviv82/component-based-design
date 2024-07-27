import "./homePage.css";

import { useLoaderData } from "react-router";

export const HomePage = () => {
  const health = useLoaderData();

  return (
    <div className="home-page">
      <pre>{JSON.stringify(health.data, null, 2)}</pre>
    </div>
  );
};
