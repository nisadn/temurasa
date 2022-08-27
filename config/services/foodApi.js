import { axiosClient } from "../apiClient";

export const foodApi = {
    foods: async () => {
        try {
            const res = await axiosClient.get('/v1/foods');
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}