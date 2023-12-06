import HttpRequest from './http';
import { merge } from 'lodash-es';
import { getToken } from '../auth';
import { RequestCodeEnum, RequestMethodsEnum } from '@/enums/requestEnums';
import { useUserStore } from '@/stores/user'
import { useMessage } from '../message';

const message = useMessage();

const requestHooks = {
    // 请求拦截器
    requestInterceptorsHook(options, config) {
        const { urlPrefix, baseUrl, withToken, isAuth } = config;
        options.header = options.header ?? {};
        if (urlPrefix) {
            options.url = `${urlPrefix}${options.url}`;
        }
        if (baseUrl) {
            options.url = `${baseUrl}${options.url}`;
        }
        const token = getToken();
        if (withToken && !options.header.token) {
            options.header.token = token;
        }
        return options;
    },
    // 响应拦截器
    responseInterceptorsHook(response, config) {
        const { isTransformResponse, isReturnDefaultResponse, isAuth } = config;
        
        if (isReturnDefaultResponse) {
            return response;
        }
        if (!isTransformResponse) {
            return response.data;
        }
        const { logout, isLogin } = useUserStore();
        const { code, data, msg, show } = response.data;
        switch (code) {
            case RequestCodeEnum.SUCCESS:
                msg && show && message.toast(msg);
                return data;
            case RequestCodeEnum.FAILED:
                message.toast(msg);
                return Promise.reject(msg);

            case RequestCodeEnum.TOKEN_INVALID:
                if (isAuth && isLogin) {
                    
                }
                
                return Promise.reject();

            default:
                return data;
        }
    },
    // 响应异常拦截器
    responseInterceptorsCatchHook(options, err) {
        if (options.method.toUpperCase() == RequestMethodsEnum.POST) {
            console.log('🔥请求失败:', err, options);
        }
        return Promise.reject();
    }
};

// 默认配置
const defaultOptions = {
    // 请求配置
    requestOptions: {
        timeout: 10 * 1000,
        header: { version: '1.0.0' }
    },
    // 基础 URL
    baseUrl: `${import.meta.env.VITE_APP_BASE_URL || ''}`,
    // 是否返回默认响应
    isReturnDefaultResponse: false,
    // 是否转换响应
    isTransformResponse: true,
    // url 前缀
    urlPrefix: '',
    // 忽略重复请求取消
    ignoreCancel: true,
    // 携带 Token
    withToken: true,
    // 接口是否鉴权
    isAuth: false,
    // 重试次数
    retryCount: 2,
    // 重试超时
    retryTimeout: 300,
    // 请求 Hook
    requestHooks: requestHooks
};

function createRequest(opt) {
    return new HttpRequest(
        merge(defaultOptions, opt || {})
    );
}
const request = createRequest();
export default request;