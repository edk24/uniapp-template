# edk24-uniapp-template

`edk24-uniapp-template` 是一个 uniapp 项目模板，其主要思想是简约快速的敏捷开发模板。使用 vue3 + javascript 开发项目

- ✅ Vue3
- ✅ JavaScript
- ✅ Pinia
- ✅ UnoCSS
- ✅ Pnpm
- ✅ Sass

## 工具库 utils

### 请求库

🏷 用作请求接口的，封装的 uni.request，返回一个 Promise。

**使用示例**

- request(options, [config])

**options参考**

| 名称 | 类型 | 必填 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| url | `string` | 是 | - | 接口地址，示例：`/api/user/get` |
| method | `string` | 否 | GET | 可选项 `GET` `POST` `PUT` `DELETE` `OPTIONS` 等，参考 uni.request method 参数有效值 |
| data | `object` | 否 | - | 提交参数 |
| header | `object` | 否 | - | 请求头，示例 `{ token: '你的 token'}` |

**config参考**

| 名称 | 类型 | 必填 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| baseUrl | `string` | 否 | - | 基础接口地址, 读取 .env 的 VITE_APP_BASE_URL |
| isReturnDefaultResponse | `bool` | 否 | false | 返回默认响应体，不做额外处理， 原样返回 |
| isTransformResponse | `bool` | 否 | true | 转换响应体，false 直接返回 data, true 自动处理业务代码报错提示等（前提 isReturnDefaultResponse 是 false） |
| ignoreCancel | `bool` | 否 | false | 忽略取消重复请求 |
| retryCount | `number` | 否 | 2 | 重试次数 |
| retryTimeout | `number` | 否 | 300 | 重试延迟 |
| withToken | `bool` | 否 | true | 携带 token |
| isAuth | `bool` | 否 | false | 接口是否鉴权，暂时无用，可在拦截器中扩展 |

#### 请求示例

🏷️ 所有接口请求都必须放在 `src/api/` 目录下统一维护

```javascript
import request from '@/utils/request'

// get 请求
export function getUser() {
    return request.get({ url: '/api/user/get' })
}

// post 请求
export function login(mobile, password) {
    return request.post({
        url: '/api/user/login',
        data: {
            mobile, // mobile: mobile 的缩写
            password
        }
    })
}

```

### @/utils/cache.js

缓存工具

```javascript
import cache from '@/utils/cache.js'

// 设置缓存
cache.set('token', '1b1b1b1b1b1')

// 获取缓存
cache.get('token')
// 1b1b1b1b1b1

// 删除缓存
cache.remove('token')

// 获取时间戳
cache.time()
// 1660060800
```

### @/utils/formatter.js

格式化工具

```javascript
import { maskPhoneNumber, maskIdNumber} from '@/utils/formatter.js'

// 手机号加掩码
maskPhoneNumber('18311548012')
// 183****8014

// 证件号码加掩码
maskIdNumber('522131199703213411')
// 5221***********8014
```

### @/utils/message.js

操作反馈

```javascript
import {
    showToast,
    showAlert,
    showLoading,
    hideLoading,
    useMessage
} from '@/utils/message.js'

// toast
showToast('操作成功')

// 模态确认框
showAlert('操作成功，请确认')

// 加载 loading
showLoading('拼命加载中')
hideLoading()

// 组合式api
const message = useMessage()
message.toast('提交成功')
message.success('操作成功')
message.error('操作失败')
message.alert('操作完成')
message.showLoading()
message.hideLoading()
```

### @/utils/validate.js

验证库

```javascript
import {
    isUrl,
    isPhoneNumber,
    isIdCardValid,
    isHttpProtocol,
    isHttpsProtocol
} from '@/utils/validate.js'

isUrl('http://doc.edk24.com') // true 
isPhoneNumber('18310102020') // true
isIdCardValid('522131199701213421') // true
isHttpProtocol('ftp://root@192.168.100.1') // false
```
