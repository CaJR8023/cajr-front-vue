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
  getUserInfo: id => `/api/user/${id}`,
  verifyCode: `/api/code/verify`,
  register: "/api/user/",
  newestNewsList: page => `/api/visitor/newest?page=${page}`,
  hottestTag: "/api/tag/hottest",
  getOneTag: id => `/api/tag/${id}`,
  getOneArticle: id => `/api/news/${id}`,
  get24HoursNews: "/api/news/hot_24_hours",
  getReview: id => `/api/review/news?newsId=${id}`
};
