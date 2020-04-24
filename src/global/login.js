import Axios from "./axios";
import API from "./api";

export function passwordLogin(data) {
  const url = API.passwordLogin;
  return Axios.login(url, data);
}
export function smsLogin(data) {
  const url = API.smsLogin;
  return Axios.login(url, data);
}
export function getInfo(data) {
  return Axios.get(API.getUserInfo(data));
}
