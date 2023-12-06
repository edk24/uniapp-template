/**
 * 验证手机号格式是否合法
 */
export function isPhoneNumber(phoneNumber) {
    const phoneRegex = /^1[3456789]\d{9}$/;
    return phoneRegex.test(phoneNumber)
}

/**
 * 验证身份证号码是否合法
 */
export function isIdCardValid(idCard) {
    // 15位身份证号码正则表达式
    var reg15 = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2]\d)|(3[0-1]))\d{3}$/;
    // 18位身份证号码正则表达式
    var reg18 = /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))((0[1-9])|([1-2]\d)|(3[0-1]))\d{3}(\d|X|x)$/;
    return reg15.test(idCard) || reg18.test(idCard);
}

/**
 * 是否为 http 协议
 */
export function isHttpProtocol(url) {
    const httpRegex = /^(http:\/\/)/;
    return httpRegex.test(url);
}

/**
 * 是否为 https 协议
 */
export function isHttpsProtocol(url) {
    const httpRegex = /^(https:\/\/)/;
    return httpRegex.test(url);
}

/**
 * 是否为 url
 */
export function isUrl(url) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlRegex.test(url);
}

