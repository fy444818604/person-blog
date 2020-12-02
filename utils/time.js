exports.dateFormat = (date, fmt) => {
  let thisDate = date || new Date();
  let o = {
    'M+': thisDate.getMonth() + 1, // 月份
    'd+': thisDate.getDate(), // 日
    'h+': thisDate.getHours(), // 小时
    'm+': thisDate.getMinutes(), // 分
    's+': thisDate.getSeconds(), // 秒
    'q+': Math.floor((thisDate.getMonth() + 3) / 3), // 季度
    s: thisDate.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (thisDate.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}