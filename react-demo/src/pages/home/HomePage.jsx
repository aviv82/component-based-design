import { useEffect, useState } from "react";
import { getHealth } from "../../services/healthService";

export const HomePage = () => {
  const [message, setMessage] = useState({});

  useEffect(() => {
    getHealthStatus();
  }, []);

  const getHealthStatus = async () => {
    const status = await getHealth();
    setMessage(status.data);
  };

  return (
    <div>
      <h2>home</h2>
      <pre>{JSON.stringify(message, null, 2)}</pre>
    </div>
  );
};
