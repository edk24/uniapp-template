export const ContentTypeEnum = {
    JSON: 'application/json;charset=UTF-8'
};

export const RequestMethodsEnum = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT'
};

export const RequestCodeEnum = {
    SUCCESS: 1, //成功
    FAILED: 0, // 失败
    TOKEN_INVALID: 401 // TOKEN失效未登录
};

export const RequestErrMsgEnum = {
    ABORT: 'request:fail abort',
    TIMEOUT: 'request:fail timeout'
};