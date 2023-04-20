import axios from "axios";
import {setNewUserData} from "../Redux/profile-reducer";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
    withCredentials: true,
    baseURL: baseUrl,
    headers: {
        'API-KEY': '6949b6c0-cffb-4ad9-8c2d-26b94e86bb3f'
    }

});
export const usersAPI = {
    getUsers(pageSize = 4, currentPage = 2) {
        return (instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response =>  response.data)
        )
    },

    followUser(userId) {
        return (instance.post(`follow/${userId}`,{})
            .then(response =>  response.data)
        )
    },

    unFollowUser(userId) {
        return (instance.delete(`follow/${userId}`)
            .then(response =>  response.data)
        )
    }
}


export const authAPI = {

    authMe() {
        return (instance.get(`auth/me`)
            .then(response =>  response.data)
        )
    },

    login(email, password, rememberMe = false, captcha) {
        return (instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
        )
    },

    logout() {
        return (instance.delete(`auth/login`))
        .then(response => response.data)
    },

    getCaptcha() {
        return (instance.get(`/security/get-captcha-url`))
        .then(response => response.data)
    }

}

export const profileAPI = {
    getProfile(userId) {
        return (instance.get(`profile/${userId}`)
        .then(response => response.data)
        )

    },
    getStatus(userId) {
        return (instance.get(`profile/status/${userId}`)
        .then(response => response.data)
        )
    },

    changeStatus(status) {
        return (instance.put(`profile/status`, { status: status})
        .then(response => response.data)
        )
    },
    setPhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo)

        return (instance.put(`/profile/photo`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                 })
                .then(response => response.data)
        )
    },
    setNewUserData(data) {
        return (instance.put(`profile`, data)
                .then(response => response.data)
        )
    }

}

