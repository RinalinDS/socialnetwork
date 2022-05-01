import axios from "axios";
import {profileType} from '../redux/profileReducer';


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
  login(email: string, password: string, rememberMe: boolean, captcha:string = '') {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
      .then(res => res.data)
  },
  logout() {
    return instance.delete(`auth/login`)
      .then(res => res.data)
  },
}

export const profileAPI = {
  setUserProfile(userId: number) {
    return instance.get(`profile/${userId}`)
      .then(res => res.data)
  },
  getStatus(userId: number) {
    return instance.get(`/profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put('/profile/status/', {status})
  },
  savePhoto(photo: any) {
    const form = new FormData();
    form.append('image', photo);
    return instance.put('/profile/photo', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })

  },
  updateProfile(profile: profileType) {
    return instance.put('/profile/', profile)
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`/security/get-captcha-url`)
  },
}