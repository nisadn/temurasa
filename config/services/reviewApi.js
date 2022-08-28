import { axiosClient } from "../apiClient";

export const reviewApi = {
    getReview: async (id) => {
        try {
            const res = await axiosClient.get(`/v1/restaurants/${id}/reviews`);
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    }, 
    postReview: async (data) => {
        try {
            const res = await axiosClient.post('/v1/restaurants/reviews', data);
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    editReview: async (id, data) => {
        try {
            const res = await axiosClient.put(`/v1/restaurants/reviews/${id}`, data);
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    deleteReview: async (id) => {
        try {
            const res = await axiosClient.delete(`/v1/restaurants/reviews/${id}`);
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    },
}