<template>
  <div
    class="u-article-container"
    style="max-width: 800px; padding:16px 0; min-height: 378px;"
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
      <div class="article-card" v-for="item in newsList" :key="item.id">
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
              <div class="title text_ellipsis2">
                {{ item.title }}
              </div>
            </router-link>
            <div class="mobile_card">
              <a href="javascript:;" target="_blank">
                <div class="title text_ellipsis2">
                  {{ item.title }}
                </div>
              </a>
            </div>
            <div class="bottom-card">
              <div class="left">
                <div class="pic-box">
                  <router-link
                    target="_blank"
                    :to="{ path: `/u/` + item.userOther.id }"
                  >
                    <img
                      :src="ossUrl + item.userOther.avatar"
                      class="header"
                      lazy="loaded"
                    />
                  </router-link>
                  <router-link
                    target="_blank"
                    :to="{ path: `/u/` + item.userOther.id }"
                  >
                    <span class="name" style="font-size:13px">{{
                      item.userOther.username
                    }}</span>
                  </router-link>
                </div>
                <div class="pic-box time" style="margin-left:10px">
                  <span>{{ item.time }}</span>
                </div>
              </div>

              <div class="right">
                <div class="pic-box ">
                  <i class="el-icon-star-on"></i>
                  <span class="name">4</span>
                </div>
                <a
                  :href="/post/ + item.id"
                  target="_blank"
                  class="pic-box"
                  style="margin-left:20px;"
                >
                  <i class="el-icon-chat-dot-square"></i>
                  <span class="name">{{ item.reviewCount }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="clear: both;"></div>
      <div class="loadingMore">{{ moreDataInfo }}</div>
    </div>
  </div>
</template>

<script>
import Serve from "@/global/request";
export default {
  props: ["userId"],
  data() {
    return {
      loading: false,
      newsList: [],
      userIdReq: {
        userId: 0
      },
      ossUrl: "",
      moreDataInfo: "加载更多"
    };
  },
  created() {
    console.log(this.userId);
    this.getData();
    this.ossUrl = this.$store.getters.ossImgUrl;
    if (this.newsList.length < 1) {
      this.moreDataInfo = "没有更多数据了";
    }
  },
  methods: {
    getData() {
      this.userIdReq.userId = this.userId;
      Serve.userCollect(this.userIdReq).then(res => {
        this.newsList = res.data;
      });
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
.u-article-container {
  .article {
    margin: -4px;
    padding-bottom: 8px;
    max-width: 800px;
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
        max-width: 800px;
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
      margin: 4px;
      margin-bottom: 20px;
    }
  }
}
.loadingMore {
  max-width: 800px;
  width: 100%;
  background: #fff;
  text-align: center;
  color: #292525;
  font-size: 14px;
  height: 60px;
  line-height: 60px;
}
</style>
