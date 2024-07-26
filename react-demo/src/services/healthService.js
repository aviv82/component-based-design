import http from "../common/HttpCommon";

export const getHealth = async () => {
  return await http.get();
};
