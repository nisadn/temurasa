import { axiosClient } from "../apiClient";

export const authApi = {
    login: async (data) => {
        try {
            const res = await axiosClient.post('/v1/auth/login', data);
            return res.data;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    register: async (data) => {
        try {
            const res = await axiosClient.post('/v1/auth/register', data);
            return res.data;
        } catch (error) {
            return Promise.reject(error);
        }
    },
}