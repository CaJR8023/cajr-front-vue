<template>
  <div
    class="search-article-container"
    style="max-width: 832px; padding:5px 0; min-height: 378px;"
  >
    <div class="article">
      <div class="articleCardLoading" v-show="loading">
        <div class="loading">
          <div class="img-box"></div>
          <div class="card-content">
            <div class="title"></div>
            <div class="txt"></div>
            <div class="pic-box" style="display: flex!important;">
              <div class="header"></div>
              <div class="name"></div>
              <div class="name" style="margin-left: 20px;"></div>
              <div class="name" style="margin-left: 100px;"></div>
              <div class="name"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="searchNewsData.length > 0">
        <div class="article-card" v-for="item in searchNewsData" :key="item.id">
          <div class="card-box">
            <div class="img-box">
              <router-link target="_blank" :to="{ path: `/post/` + item.id }">
                <img :src="item.banner" class="card_img" />
              </router-link>
            </div>
            <div class="card-content">
              <router-link
                class="pc-card"
                target="_blank"
                :to="{ path: `/post/` + item.id }"
              >
                <div class="title text_ellipsis2">{{ item.title }}</div>
              </router-link>
              <div class="mobile_card">
                <a href="javascript:;" target="_blank">
                  <div class="title text_ellipsis2"></div>
                </a>
              </div>
              <div class="bottom-card">
                <div class="left">
                  <div class="pic-box">
                    <a href="javascript:;" target="_blank">
                      <img
                        :src="OSSUrl + item.userOther.avatar"
                        class="header"
                        lazy="loaded"
                      />
                    </a>
                    <a href="javascript:;" target="_blank">
                      <span class="name" style="font-size: 13px;">{{
                        item.userOther.username
                      }}</span>
                    </a>
                  </div>
                  <div class="pic-box time" style="margin-left:10px">
                    <span>{{ item.time }}</span>
                  </div>
                  <i
                    class="el-icon-star-on"
                    style="margin-left: 65px;font-size: 18px; color: #ffa902;"
                  ></i>
                  <span class="name" style="color:#8e8787;">{{
                    item.reviewCount
                  }}</span>
                </div>
                <router-link
                  class="pic-box"
                  target="_blank"
                  :to="{ path: `/post/` + item.id }"
                  style="margin-left: 20px;"
                >
                  <i
                    class="el-icon-chat-dot-square"
                    style="font-size: 18px;"
                  ></i>
                  <span class="name">{{ item.reviewCount }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="no-data" v-else></div>
    </div>
    <div style="clear: both;"></div>
    <div class="loadingMore">
      <a href="javascript:;" @click="loadingMore" v-if="moreStatus">加载更多</a>
      <a href="javascript:;" v-else disabled="!moreStatus">没有更多了</a>
    </div>
  </div>
</template>

<script>
import Serve from "../global/request";

export default {
  props: ["keyWord"],
  data() {
    return {
      searchNewsData: [],
      loading: false,
      page: 1,
      moreStatus: true,
      OSSUrl: ""
    };
  },
  created() {
    this.search();
    this.OSSUrl = this.$store.getters.ossImgUrl;
  },
  methods: {
    search() {
      this.page = 1;
      this.moreStatus = true;
      Serve.searchNews(this.keyWord, this.page).then(res => {
        this.searchNewsData = res.list;
      });
    },
    loadingMore() {
      this.page++;
      Serve.searchNews(this.keyWord, this.page).then(res => {
        let data = res.list;
        if (data.length <= 0) {
          this.$message.warning("没有更多了");
          this.moreStatus = false;
        }
        for (let i = 0; i < res.list.length; i++) {
          this.searchNewsData.push(res.list[i]);
        }
      });
    },
    articleDetails(id) {
      this.$router.push({ path: `/post/${id}` });
    }
  }
};
</script>

<style lang="less" scoped>
img {
  vertical-align: middle;
}
a {
  text-decoration: none;
  color: #292525;
  -webkit-tap-highlight-color: transparent;
}
.text_ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.time {
  font-size: 16px;
}
.search-article-container {
  .article {
    margin: -4px;
    padding-bottom: 8px;
    max-width: 852px;
    width: 100%;
    .articleCardLoading {
      width: 100%;
      padding: 4px;
      float: left;
      .loading {
        display: flex;
        max-width: 800px;
        width: 100%;
        .img-box {
          width: 50%;
          padding-top: 27.5%;
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease-out;
          background: #e5e5e5;
          a {
            text-decoration: none;
            color: #292525;
            -webkit-tap-highlight-color: transparent;
            &:hover {
              color: #292525;
            }
            img {
              position: absolute;
              left: 50%;
              top: 50%;
              width: auto;
              height: 100%;
              transform: translate(-50%, -50%);
              min-width: 100%;
              transition: width 0.2s ease-out, height 0.2s ease-out;
            }
          }
        }
      }
      .card-content {
        width: 50%;
        padding: 30px;
        background: #fff;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .title {
          background: #e5e5e5;
          width: 100%;
          height: 22px;
        }
        .txt {
          margin-top: 30px;
          background: #e5e5e5;
          width: 70%;
          height: 22px;
          margin-bottom: 18px;
        }
        .pic-box {
          margin-top: 40px;
          align-items: center;
          .header {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #f5f5f5;
          }
          .name {
            width: 43px;
            height: 15px;
            background: #f5f5f5;
            margin-left: 10px;
          }
        }
      }
    }
    .article-card {
      width: 100%;
      padding: 4px;
      float: left;
      .card-box {
        max-width: 852px;
        display: flex;
        width: 100%;
        .img-box {
          width: 50%;
          padding-top: 25%;
          position: relative;
          transition: all 0.2s ease-out;
          background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(0, 0, 0, 0.2)
          );
          a {
            text-decoration: none;
            color: #292525;
            -webkit-tap-highlight-color: transparent;
            &:hover {
              color: red;
            }
            img {
              position: absolute;
              left: 50%;
              top: 50%;
              width: 50%;
              height: 100%;
              transform: translate(-50%, -50%);
              min-width: 100%;
              transition: width 0.2s ease-out, height 0.2s ease-out;
            }
          }
        }
        .card-content {
          width: 50%;
          padding: 30px;
          background: #fff;
          box-sizing: border-box;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          flex-direction: column;
          -webkit-box-pack: justify;
          justify-content: space-between;
          .pc-card {
            .title {
              color: #292525;
              font-weight: 600;
              font-size: 20px;
              height: 57px;
              margin-bottom: 20px;
              line-height: 1.4;
              text-align: left;
            }
            .text_ellipsis2 {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }
          }
          .mobile_card {
            display: none;
          }
          .bottom-card {
            display: flex;
            justify-content: start;
            align-items: center;
            flex-wrap: wrap;
            .pic-box {
              display: flex;
              align-items: center;
              -webkit-box-align: center;
              color: #8e8787;
            }
            .left {
              display: flex;
              justify-content: start;
              align-items: center;
              flex-wrap: wrap;
              .pic-box {
                margin-right: 20px;
                .header {
                  cursor: pointer;
                  width: 24px;
                  height: 24px;
                  border-radius: 50%;
                  margin-right: 10px;
                }
                .name {
                  display: flex;
                  max-width: 90px;
                }
              }
            }
            .right {
              display: flex;
              justify-content: start;
              align-items: center;
              flex-wrap: wrap;
              .pic-box {
                margin-left: 80px;
              }
              .name {
                margin-left: 2px;
              }
            }
          }
        }
      }
    }

    .loadingMore {
      margin: 20px;
    }
  }
}
.loadingMore {
  max-width: 832px;
  width: 100%;
  background: #fff;
  text-align: center;
  color: #292525;
  font-size: 14px;
  height: 60px;
  line-height: 60px;
  margin-top: 15px;
}
</style>
