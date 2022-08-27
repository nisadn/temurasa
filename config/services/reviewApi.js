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
}