// 格式化时间戳为 "刚刚, 几分钟前"
export function formatTimestamp(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;

  // 刚刚
  if (diff < 60000) {
    return '刚刚';
  }

  // n分钟前
  if (diff < 3600000) {
    return Math.floor(diff / 60000) + '分钟前';
  }

  // n小时前
  if (diff < 86400000) {
    return Math.floor(diff / 3600000) + '小时前';
  }

  // 昨天
  if (diff < 172800000) {
    return '昨天';
  }

  // 前天
  if (diff < 259200000) {
    return '前天';
  }

  // n月n日
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return month + '月' + day + '日';
}