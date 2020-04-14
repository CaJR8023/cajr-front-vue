import API from "./api";
import Axios from "./axios";

const Serve = {
  recommend() {
    return Axios.get(API.recommend);
  },
  select() {
    return Axios.get(API.select);
  },
  hostlist() {
    return Axios.get(API.hostList);
  },
  hostLists(params) {
    let name = params || "";
    return Axios.get(API.hostListItem(name));
  },
  newsSpecialsList() {
    return Axios.get(API.newsSpecialsList);
  },
  zhuanlanCard() {
    return Axios.get(API.zhuanlanCard);
  },
  sendCode(params) {
    return Axios.get(API.sendCode(params));
  },
  getUserInfo(params) {
    return Axios.get(API.getUserInfo(params));
  },
  veridyCode(params) {
    return Axios.get(API.verifyCode, params);
  },
  register(data) {
    return Axios.post(API.register, data);
  }
};

export default Serve;
