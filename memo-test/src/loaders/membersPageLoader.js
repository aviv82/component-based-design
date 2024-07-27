import { getAll } from "../services/memberServices";

export const membersPageLoader = async () => {
  const requests = await getAll();

  return requests.data;
};
