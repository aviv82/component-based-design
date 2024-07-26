import { useLoaderData } from "react-router";

export const HomePage = () => {
  const message = useLoaderData();

  return (
    <div>
      <h2>home</h2>
      <pre>{JSON.stringify(message, null, 2)}</pre>
    </div>
  );
};
