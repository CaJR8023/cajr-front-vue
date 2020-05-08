import API from "./api";
import Axios from "./axios";

const Serve = {
  recommendNewsList(userId, page) {
    let api = "/api/news_rec/rec?userId=" + userId + "&page=" + page;
    return Axios.get(api);
  },
  recommend(params) {
    return Axios.get(API.recommend(params));
  },
  hottestTag() {
    return Axios.get(API.hottestTag);
  },
  newestNewsVisitor(page) {
    return Axios.get(API.newestNewsList(page));
  },
  get24HoursNews() {
    return Axios.get(API.get24HoursNews);
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
    return Axios.get(API.sendCode, params);
  },
  getUserInfo(params) {
    return Axios.get(API.getUserInfo(params));
  },
  _getUserInfo(params) {
    return Axios.get(API._getUserInfo(params));
  },
  getInfoByTel(data) {
    return Axios.get(API.getUserInfoByTel(data));
  },
  veridyCode(params) {
    return Axios.get(API.verifyCode, params);
  },
  register(data) {
    return Axios.post(API.register, data);
  },
  getOneTag(id) {
    return Axios.get(API.getOneTag(id));
  },
  getOneNews(id) {
    return Axios.get(API.getOneArticle(id));
  },
  getNewsReview(newsId) {
    return Axios.get(API.getReview(newsId));
  },
  searchNews(keyWord, page) {
    let api = "/api/news/search?keyWord=" + keyWord + "&page=" + page;
    return Axios.get(api);
  },
  searchUsers(keyWord, page) {
    let api = "/api/user/visitor/search?keyWord=" + keyWord + "&page=" + page;
    return Axios.get(api);
  },
  newsLogs(data) {
    return Axios.post(API.newsLogs, data);
  },
  userInfo(data) {
    return Axios.put(API.userInfo, data);
  },
  resetPwd(data) {
    return Axios.get(API.resetPassword, data);
  },
  postNews(data) {
    return Axios.post(API.postNews, data);
  },
  userNews(data) {
    return Axios.get(API.userNews, data);
  },
  userReview(data) {
    return Axios.get(API.userReview, data);
  },
  userNewsLogs(data) {
    return Axios.get(API.userNewsLogs, data);
  },
  userCollect(data) {
    return Axios.get(API.userCollect, data);
  },
  userFollow(data) {
    return Axios.get(API.userFollow, data);
  },
  postReview(data) {
    return Axios.post(API.postReview, data);
  },
  postReply(data) {
    return Axios.post(API.postReply, data);
  }
};

export default Serve;
