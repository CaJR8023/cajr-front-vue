<template>
  <div
    class="u-review-container"
    style="max-width: 800px; padding:16px 0; min-height: 378px;"
  >
    <div class="u-review-list">
      <div class="u-review-item" v-for="item in reviewList" :key="item.id">
        <div class="title-box">
          <div class="left">
            <div class="title">
              <div class="cajr-portrait" style="height: 32px;">
                <img :src="ossUrl + item.userOther.avatar" />
              </div>
              <span class="name">{{ item.userOther.username }}</span>
            </div>
            <div class="memo">
              评论了 &nbsp;
              <span class="nicknameEllip">{{
                item.news.userOther.username
              }}</span
              >&nbsp; 的文章
            </div>
            <div class="time">{{ item.time }}</div>
          </div>
        </div>
        <div class="review-box">
          <div class="review-comment-box">
            <i
              class="el-icon-chat-round"
              style="font-size: 32px; margin-right:30px;"
            ></i>
            <div class="comment-content">
              <div class="txt">
                <span>{{ item.content }}</span>
              </div>
              <div class="article-title-box">
                <div class="title-name">
                  标题：
                  <a :href="/post/ + item.news.id" target="_blank">{{
                    item.news.title
                  }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="clear:both;" />
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
      reviewList: [],
      userIdReq: {
        userId: 0
      },
      ossUrl: "",
      moreDataInfo: "加载更多"
    };
  },
  created() {
    this.getData();
    this.ossUrl = this.$store.getters.ossImgUrl;
    if (this.reviewList.length < 1) {
      this.moreDataInfo = "没有更多数据了";
    }
  },
  methods: {
    getData() {
      this.userIdReq.userId = this.userId;
      Serve.userReview(this.userIdReq).then(res => {
        this.reviewList = res.data;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.u-review-list {
  margin: -4px;
  padding-bottom: 8px;
  max-width: 800px;
  width: 100%;
  .u-review-item {
    margin-bottom: 10px;
    .title-box {
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      font-size: 14px;
      color: #8e8787;
      margin-bottom: 8px;
      .left {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        .title {
          .cajr-portrait {
            display: inline-block;
            vertical-align: middle;
            height: auto;
            line-height: normal;
            position: relative;
            img {
              height: 32px;
              width: 32px;
              border-radius: 32px;
            }
          }
        }
        .memo {
          line-height: 32px;
        }
      }
      .name {
        color: #292525;
        margin-left: 10px;
        margin-right: 14px;
        font-weight: 300;
      }
      .time {
        margin-left: 487px;
      }
    }
    .review-box {
      -webkit-box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
      .review-comment-box {
        padding: 30px;
        background: #fff;
        display: flex;
        .comment-content {
          -webkit-box-flex: 1;
          flex: 1;
          word-wrap: break-word;
          .txt {
            font-size: 16px;
            color: #292525;
            width: 100%;
            max-width: 664px;
          }
          .article-title-box {
            padding: 15px;
            background: #eee;
            margin-top: 12px;
            .title-name {
              color: #8e8787;
              font-size: 14px;
              a {
                text-decoration: none;
                color: #292525;
                -webkit-tap-highlight-color: transparent;
                &:hover {
                  color: red;
                }
              }
            }
          }
        }
      }
    }
  }
  .loadingMore {
    margin-bottom: 20px;
    max-width: 822px;
    width: 100%;
    background: #fff;
    text-align: center;
    color: #292525;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
    margin-bottom: 10px;
  }
}
</style>
