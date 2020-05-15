//全局权限处理
export function checkAuthority (key) {
  //权限数组
  let authorityList = ['1', '2', '3']
  let index = authorityList.indexOf(key)
  if (index > -1) {
    return true
  } else {
    return false
  }
}