import { getAll } from "../services/groupServices";

export const groupsPageLoader = async () => {
  const requests = await getAll();

  return requests.data;
};
