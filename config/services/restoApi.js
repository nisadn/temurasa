import { axiosClient } from "../apiClient";

export const restoApi = {
    getDetail: async (id) => {
        try {
            const res = await axiosClient.get(`/v1/restaurants/${id}`);
            return res.data;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getRestoByLoc: async (id) => {
        try {
            const res = await axiosClient.get(`/v1/restaurants?locationId=${id}`);
            return res.data;
        } catch (error) {
            return Promise.reject(error);
        }
    },
}