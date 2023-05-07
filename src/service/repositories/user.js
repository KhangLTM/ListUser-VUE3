import api from '../interceptors/axios';

const resource = 'users';

export default {
    getUsers: params => {
        return api.get(`${resource}`, { params });
    },
    detailUser: ({userId}) => {
        return api.get(`${resource}/${userId}`);
    },
    createUser: data => {
        return api.post(`${resource}`, data);
    },
    updateUser: ({userId,data}) => {
        return api.put(`${resource}/${userId}`, data);
    },
    deleteUser: userId => {
        return api.delete(`${resource}/${userId}`);
    },
};
