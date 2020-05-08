<template>
  <div class="cajr-home-page" style="width: 800px;">
    <el-container>
      <el-main class="cajr-home-main">
        <div class="cajr-main-tabs">
          <router-link :to="{ name: 'Home' }">推荐</router-link>
          <router-link :to="{ name: 'Specials' }">热榜</router-link>
        </div>
        <cajr-loading v-show="loading" />
        <div class="cajr-main-list" style="overflow:auto;">
          <div
            class="cajr-articles-item"
            v-for="(item, index) in recommend"
            :key="index"
          >
            <div class="cajr-user-card block">
              <a class="avator" href>
                <img
                  :src="ossImgUrl + item.userOther.avatar"
                  style="width:40px; height:40px;"
                  lazy="loaded"
                />
              </a>
              <h4>
                <a href>{{ item.userOther.username }}</a>
              </h4>
              <time>{{ item.time }}</time>
              <div class="more">
                <el-popover width="80px" trigger="click">
                  <div style="text-align: center; margin: 0; ">
                    <a href="javascript:;" @click="collect(item.id)">收藏</a>
                    <a
                      href="javascript:;"
                      style="margin-left: 10px"
                      @click="unLike(item.id)"
                      >不喜欢</a
                    >
                  </div>
                  <a
                    href="javascript:;"
                    slot="reference"
                    style="color: #4a4a4a;"
                  >
                    <span
                      class="el-icon-more-outline"
                      style="width: 24px; height: 24px;"
                    ></span>
                  </a>
                </el-popover>
              </div>
            </div>
            <h3 class="cajr-articles-title">
              <a
                href="javascript:;"
                @click="articleDetails(item.id)"
                v-if="item.browseStatus >= 1"
                style="color:#8e8787"
              >
                {{ item.title }}
              </a>
              <a href="javascript:;" @click="articleDetails(item.id)" v-else>
                {{ item.title }}
              </a>
            </h3>
            <div class="cajr-articles-container">
              <div class="cajr-articles-cover" v-if="item.existBanner">
                <img :src="item.banner" />
              </div>
              <div class="cajr-articles-content">
                <div class="articles-content">{{ item.desc }}</div>
                <!-- <el-button type="text">阅读全文</el-button> -->
                <footer class="meta">
                  <div class="actions">
                    <span class="like-views">
                      <i class="icon el-icon-view" style="font-size:18px"></i>
                      <sup v-if="item.visitorCount <= 998">
                        {{ item.visitorCount }}
                      </sup>
                      <sup v-else>999+</sup>
                    </span>
                    <a href="javascript:;">
                      <i
                        class="icon el-icon-chat-dot-square"
                        style="font-size:18px"
                      ></i>
                      <sup v-if="item.reviewCount <= 998">
                        {{ item.reviewCount }}
                      </sup>
                      <sup v-else>999+</sup>
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
          <el-button
            class="moreBtn"
            @click="moreData"
            style="margin:0 auto;display:block;"
            >{{ moreInfo }}</el-button
          >
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import loading from "../components/_cajr-loading";
import Serve from "../global/request";
export default {
  name: "home",
  data() {
    return {
      recommend: [],
      moreRecommend: [],
      loading: true,
      articleLoading: false,
      index: 1,
      init: 10,
      moreInfo: "查看更多内容 >>",
      page: 1,
      isLogin: false,
      ossImgUrl: ""
    };
  },
  computed: {},
  created() {
    this.loginStatus();
    if (this.isLogin) {
      this.recommendNews();
    } else {
      this.render();
    }
    this.ossImgUrl = this.$store.getters.ossImgUrl;
  },
  methods: {
    loginStatus() {
      if (localStorage.getItem("isLogin") == "true") {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    cajrSelect() {
      this.hiddenBtn = this.hiddenBtn ? false : true;
    },
    recommendNews() {
      let userId = localStorage.getItem("userId");
      Serve.recommendNewsList(userId, this.page)
        .then(res => {
          let data = res.list;
          for (let i = 0; i < data.length; i++) {
            this.moreRecommend.push(data[i].news);
          }

          let init = this.init;
          let reData = [];
          for (let i = 0; i < init; i++) {
            if (data[i] != null) {
              reData.push(data[i].news);
            }
          }
          this.recommend = reData;
          this.loading = false;
          this.count = data.length;
        })
        .catch(err => {
          console.log(err);
        });
    },
    render() {
      Serve.newestNewsVisitor(this.page)
        .then(res => {
          console.log(res);
          let data = res.list;
          this.moreRecommend = data;

          let init = this.init;
          let reData = [];
          for (let i = 0; i < init; i++) {
            if (data[i] != null) {
              reData.push(data[i]);
            }
          }
          this.recommend = reData;
          this.loading = false;
          this.count = data.length;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    moreData() {
      this.loading = true;
      this.page++;
      if (this.isLogin) {
        let userId = localStorage.getItem("userId");
        Serve.recommendNewsList(userId, this.page)
          .then(res => {
            let data = res.list;
            if (data.length <= 0) {
              this.moreInfo = "没有更多了";
            }
            let init = this.init;
            for (let i = 0; i < init; i++) {
              if (data[i] != null) {
                this.recommend.push(data[i].news);
              }
            }
            this.loading = false;
          })
          .catch(err => {
            console.log(err);
          });
        Serve.recommend(userId).then(res => {
          if (res.data === 1) {
            this.$message.success("触发推荐引擎成功");
          }
        });
      } else {
        Serve.newestNewsVisitor(this.page)
          .then(res => {
            let data = res.list;
            if (data.length <= 0) {
              this.moreInfo = "没有更多了";
            }
            let init = this.init;
            for (let i = 0; i < init; i++) {
              if (data[i] != null) {
                this.recommend.push(data[i]);
              }
            }
            this.loading = false;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    articleDetails(id) {
      this.$router.push({ path: `/post/${id}` });
    },
    collect(newsId) {
      if (localStorage.getItem("isLogin") == "true") {
        console.log(newsId);
      } else {
        this.$emit("isLoginDialogShow", true);
      }
    },
    unLike(newsId) {
      if (localStorage.getItem("isLogin") == "true") {
        console.log(newsId);
      } else {
        this.$emit("isLoginDialogShow", true);
      }
    }
  },
  components: {
    "cajr-loading": loading
  }
};
</script>

<style lang="less">
.block {
  display: block;
}
.avator {
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
}
a {
  text-decoration: none;
  color: #666;
}
a:hover {
  color: #000;
}

.moreBtn {
  border: 1px solid #dbe2e8;
  box-shadow: 0 1px 2px rgba(46, 61, 73, 0.08);
  margin-top: 29px;
  display: block;
  height: 70px;
  background-color: #fff;
  text-align: center;
  line-height: 70px;
  width: 100%;
}

.cajr-home-page {
  .cajr-home-main {
    margin-right: 14px;
    padding: 0;
    .cajr-main-tabs {
      background-color: #ffffff;
      position: relative;
      height: 50px;
      border: 1px solid #eee;
      line-height: 50px;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 10px;
        background-color: #fff;
      }
      a {
        color: #666;
        text-decoration: none;
        padding: 0 15px;
        &.router-link-exact-active {
          color: #000;
        }
      }
    }
    .cajr-main-list {
      .cajr-articles-item {
        background-color: #ffffff;
        border: 1px solid #eee;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        padding: 20px;
        margin: 0 0 20px;
        transition: border 0.3s ease-in-out;
        .cajr-user-card {
          .avator {
            float: left;
          }
          h4 {
            vertical-align: middle;
            font-weight: 400;
            margin: 0 10px 0 0;
            font-size: 0.85rem;
            line-height: 1.66666667;
            a {
              color: #4a4a4a;
            }
          }
          &::after {
            content: " ";
            overflow: hidden;
            clear: both;
            font-size: 0;
            display: block;
          }
          .more {
            float: right;
            position: relative;
            top: -15px;
          }
          time {
            color: #9b9b9b;
            vertical-align: middle;
            font-size: 12px;
            font-size: 0.75rem;
          }
        }
        .cajr-articles-title {
          margin-bottom: 14px;
          font-size: 1.5rem;
          margin: 0 0 10px;
          line-height: 1.5;
          a {
            color: #000;
            text-decoration: none;
            transition: 0.3s;
          }
          a:hover {
            color: red;
          }
        }
        .cajr-articles-container {
          display: flex;
          .cajr-articles-cover {
            margin-right: 18px;
            img {
              height: 108px;
              width: 190px;
              border-style: none;
              background-color: #eee;
            }
          }
          .cajr-articles-content {
            .articles-content {
              color: #606266;
              max-height: 105px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
              line-height: 1.625;
              &::after {
                content: " ";
                overflow: hidden;
                clear: both;
                font-size: 0;
                display: block;
              }
            }
            .meta {
              clear: both;
              margin-top: 22px;
              font-size: 14px;
              color: #9b9b9b;
              .actions {
                float: right;
                .icon {
                  margin-right: 4px;
                  display: inline-block;
                  vertical-align: middle;
                  background-repeat: no-repeat;
                  background-size: contain;
                  background-position: 50%;
                }
                .like-views {
                  color: #9b9b9b;
                  .cajr-icon-like {
                    margin-right: 4px;
                  }
                  sup {
                    position: static;
                    font-size: inherit;
                    line-height: inherit;
                    vertical-align: middle;
                    top: -0.5em;
                  }
                }
                a {
                  margin-left: 20px;
                  color: #666;
                  text-decoration: none;
                  padding: 0 5px;
                  sup {
                    color: #9b9b9b;
                    position: static;
                    font-size: inherit;
                    line-height: inherit;
                    vertical-align: middle;
                    top: -0.5em;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
