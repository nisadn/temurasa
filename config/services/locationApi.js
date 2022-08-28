import { axiosClient } from "../apiClient";

export const locationApi = {
  getLocation: async () => {
    try {
      const res = await axiosClient.get("/v1/locations");
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};