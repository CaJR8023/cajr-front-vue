const API = "http://yapi.weilaigongzuo.com/mock/441";
export default {
  recommend: `${API}/zhihu/recommend`,
  select: `${API}/zhihu/hot-select`,
  hostList: `${API}/zhihu/hot-list`,
  hostListItem: name => `${API}/zhihu/hot-lists/${name}`,
  newsSpecialsList: `${API}/zhihu/news_specials/list`,
  zhuanlanCard: `${API}/zhihu/zhuanlan-card`,
  uploadEditorImg: `http://127.0.0.1:5100/img/news/upload`,
  passwordLogin: "/api/oauth/token",
  smsLogin: "/api/sms/login",
  sendCode: mobile => `/api/code/send?mobile=${mobile}`,
  getUserInfo: tel => `/api/user/_name?tel=${tel}`,
  verifyCode: `/api/code/verify`,
  register: "/api/user/"
};
