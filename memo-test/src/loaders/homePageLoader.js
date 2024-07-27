import { getHealth } from "../services/healthServices";

export const homePageLoader = async () => {
  return await getHealth();
};
