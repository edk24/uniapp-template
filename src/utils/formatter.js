/**
 * 手机号加掩码
 * 18311548014 => 183****8014
 */
export function maskPhoneNumber(phoneNumber) {
    // 检查手机号码是否合法
    if (!/^1\d{10}$/.test(phoneNumber)) {
        return ''
    }
    return phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
}

/**
 * 身份证号码加掩码
 * 522131199703213421 => 5221********3421
 */
export function maskIdNumber() {
    return idNumber.replace(/(\d{4})\d+(\d{4})$/, '$1****$2');
}