import request from "@/utils/request"

// 登录
export function login(mobile, password) {
    return request.post({
        url: '/api/user/login',
        data: {
            mobile,
            password
        }
    })
}


// 获取用户信息
export function getUserInfo() {
    return request.get({
        url: '/api/user/get'
    })
}