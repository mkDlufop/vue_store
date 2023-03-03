import { v4 as uuidv4 } from 'uuid';

// 生成一个随机字符串，且每次执行不能发生变化，游客身份持久存储
export const getUUID = () => {
  let uuid_token = localStorage.getItem("UUID_TOKEN");
  if (!uuid_token) {
    uuid_token = uuidv4();
    localStorage.setItem("UUID_TOKEN", uuid_token);
  }
  return uuid_token;
}