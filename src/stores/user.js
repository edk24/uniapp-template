import { defineStore } from 'pinia'
import { getToken, setToken } from '../utils/auth'
import { getUserInfo } from '../api/auth'

export const useUserStore = new defineStore({
    id: 'userStore',
    state: () => {
        return {
            userInfo: {},
            token: getToken() || null,
            temToken: null
        }
    },

    getters: {
        isLogin: (state) => state.token && state.userInfo
    },
    actions: {
        async getUser() {
            const data = await getUserInfo()
            console.log(data,'xxx   ')
            
            this.userInfo = data
        },
        login(token) {
            this.token = token
            setToken(token)
            this.getUser()
        },
        logout() {
            this.token = ''
            this.userInfo = {}
            cache.remove(TOKEN_KEY)
        }
    }
})