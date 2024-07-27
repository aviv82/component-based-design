import http from "../common/httpService";

export const getHealth = async () => {
  return http.get();
};
