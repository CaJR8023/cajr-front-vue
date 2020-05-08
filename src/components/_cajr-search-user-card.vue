<template>
  <div class="search-user-cardlist">
    <div
      class="search-user-cardlist-item"
      v-for="item in followUserData"
      :key="item.title"
    >
      <img :src="item.image_url" alt />
      <div class="search-user-cardItem-name">{{ item.title }}</div>
      <div class="count">
        <span class="follow-count">关注 {{ item.followers }}</span>
        <span class="article-cout">文章 {{ item.articles_count }}</span>
      </div>
      <div class="search-user-cardItem-intro">{{ item.intro }}</div>
      <a class="search-user-btn" href="javascript:;" @click="collect">关注</a>
    </div>
    <div style="clear: both;" />
    <div class="loadingMore">加载更多</div>
  </div>
</template>

<script>
import Server from "../global/request";

export default {
  props: ["keyWord"],
  data() {
    return {
      Data: [],
      followUserData: [],
      isLogin: false
    };
  },
  created() {
    this.isLoginStatus();
    this.render();
    this.search();
  },
  methods: {
    render() {
      Server.zhuanlanCard().then(res => {
        this.Data = res.data;
        let data = [];
        for (let i = 0; i < 8; i++) {
          data.push(res.data[i]);
        }
        this.followUserData = data;
      });
    },
    isLoginStatus() {
      if (localStorage.getItem("isLogin") == "true") {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    search() {
      Server.searchUsers(this.keyWord, this.page).then(res => {
        console.info(res);
      });
    },
    rateBtn() {},
    collect() {
      if (!this.isLogin) {
        this.$parent.login();
      }
    }
  },
  components: {}
};
</script>

<style lang="less">
.search-user-cardlist {
  max-width: 822px;
  margin: -10px -9.5px;
  padding-bottom: 20px;
  max-width: 822px;
  min-height: 378px;
  .search-user-cardlist-item {
    background: #fff;
    float: left;
    width: 220px;
    height: 230px;
    text-align: center;
    padding: 20px;
    margin: 10px 6px;
    -webkit-box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
    img {
      display: inline-block;
      height: 50px;
      width: 50px;
      margin-bottom: 16px;
      background-color: antiquewhite;
      border-radius: 50%;
    }
    .search-user-cardItem-name {
      font-weight: 400;
      color: #292525;
      font-size: 17.4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 20px;
      margin-bottom: 10px;
    }
    .count {
      margin-bottom: 20px;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: 0.05em;
      color: #8e8787;
      span {
        margin: 0 10px 0 0;
      }
    }
    .search-user-cardItem-intro {
      color: #292525;
      font-size: 14px;
      line-height: 21px;
      height: 42px;
      margin-top: 7px;
      padding: 0 16px;
      text-align: center;
      word-break: break-all;
      display: -webkit-box;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .search-user-btn {
      display: inline-block;
      border: 1px solid transparent;
      color: #000;
      background: #f5f5f5;
      line-height: 32px;
      font-size: 14px;
      padding: 0 16px;
      margin-top: 15px;
      border-radius: 20px;
    }
  }

  .loadingMore {
    margin: 10px;
    margin-bottom: 20px;
    max-width: 800px;
    width: 100%;
    background: #fff;
    text-align: center;
    color: #292525;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
    margin-bottom: 20px;
  }
}
</style>
