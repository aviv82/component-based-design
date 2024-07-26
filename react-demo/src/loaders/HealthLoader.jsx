import { getHealth } from "../services/healthService";

export const HealthLoader = async () => {
  const healthStatus = await getHealth();
  return healthStatus.data;
};
