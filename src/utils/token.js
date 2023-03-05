// 存储 TOKEN
export const setTOKEN = (token) => {
  localStorage.setItem("TOKEN", token);
}

// 获取 TOKEN
export const getTOKEN = () => {
  return localStorage.getItem("TOKEN");
}

// 清除本地的 TOKEN
export const removeTOKEN = () => {
  localStorage.removeItem("TOKEN");
}