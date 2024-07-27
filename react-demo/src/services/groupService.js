import http from "../common/HttpCommon";

export const getAll = async () => {
  return await http.get("/groups");
};
