import { axiosInstance } from "./axiosInstance"

export const baseService = {
    getAll: async (url) => {
        var result = await axiosInstance.get(url)
        return result.data
    },
    getById: async (url, id) => {
        var result = await axiosInstance.get(`${url}/${id}`)
    },
    create: async (url, data) => {
        var result = await axiosInstance.post(url, data)
        return result.data
    },
    update: async (url, id, data) => {
        var result = await axiosInstance.put(`${url}/${id}`, data);
        return result.data;
    },
    delete: async (url, id) => {
        try {
            const result = await axiosInstance.delete(`${url}/${id}`);
            return result.data;
        } catch (error) {
            throw error;
        }
    }
}