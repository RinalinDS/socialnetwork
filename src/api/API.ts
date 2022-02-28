import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '162e6d4c-8a79-4dd3-aa4b-44b1d67a752c'
    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`,)
            .then(res => res.data)

    },
    followUser(id: number) {
        return instance.post(`follow/${id}`, {})
            .then(res => res.data)

    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
}

export const profileAPI = {
    setUserProfile(userId: string) {
        return instance.get('profile/' + userId)
            .then(res => res.data)
    }
}