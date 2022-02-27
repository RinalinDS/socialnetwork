import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '54883dec-a7ac-4a2b-a460-f0a6b4645e89'
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`, )
            .then(res => res.data)

    },
    followUser(id: number) {
        return instance.post(`follow/${id}`, {} )
            .then(res => res.data)

    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(res=> res.data)
    }
}