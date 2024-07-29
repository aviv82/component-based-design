import http from "../common/httpService";

export const getAll = async () => {
  return await http.get("/groups");
};

export const getById = async (id = 0) => {
  return await http.get(`/groups/${id}`);
};

export const create = async (createGroupRequest = {}) => {
  const result = await http.post("/groups", createGroupRequest);
  // console.log("create", result);
  return result;
};
