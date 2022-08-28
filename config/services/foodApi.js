import { axiosClient } from "../apiClient";

export const foodApi = {
  getFood: async (id) => {
    try {
      const res = await axiosClient.get(`v1/foods?locationId=${id}`);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};
