import Mock from 'mockjs'


Mock.mock('/api/user/get', 'get', (req) => {
    reqBody = JSON.parse(req.body)

    return {
        code: 401,
        data: {
            id: 1001,
            nickname: '肥波',
            avatar: ''
        }
    }
});

Mock.mock('/api/user/login', 'post', (req, a) => {
    console.log(req,a);
    return {
        code: 1,
        data: {
            token: '7f6ffaa6bb0b408017b62254211691b5'
        },
    }
});