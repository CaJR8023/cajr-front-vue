<template>
  <div class="cajr-article-page" style=" background-color: #fff;">
    <cajr-header ref="articleHeader"></cajr-header>
    <div class="postPage articlel-wrapper">
      <div class="article-detail">
        <article class="normal-article">
          <div class="article-header normal" id="aHeader">
            <div class="greyBox" v-show="newsData.existBanner"></div>
            <div
              class="article-banner"
              style="width:710px; height: 354px;"
              v-show="isBanner"
            >
              <img
                :src="newsData.banner"
                class="banner"
                style="width:710px; height: 354px"
              />
            </div>
            <div class="articleWidth-content">
              <div class="article-title" id="articleTitle">
                {{ newsData.title }}
              </div>
              <div class="article-author">
                <div class="author-box" style="min-width: 400px;">
                  <div class="article-header-author">
                    <div class="cajr-portrait avatar" style="height: 32px">
                      <a href="javascript:;" target="_blank">
                        <img
                          :src="ossImgUrl + newsData.userOther.avatar"
                          style="width:32px; height:32px; border-radius:32px;"
                        />
                      </a>
                    </div>
                    <a href="javascript:;" target="_blank">
                      <span class="nickname">{{
                        newsData.userOther.username
                      }}</span>
                    </a>
                  </div>
                </div>
                <div class="timer">{{ newsData.time }}</div>
              </div>
            </div>
          </div>
          <div class="article-body" id="aBody">
            <div class="articleWidth-content">
              <div class="content wangEditor-txt minHeight" v-if="!isHtml">
                <p v-for="item in newsContent" :key="item" v-html="item">
                  {{ item }}
                </p>
              </div>
              <div
                class="content wangEditor-txt minHeight"
                v-else
                v-html="newsContentHtml"
              >
                {{ newsContentHtml }}
              </div>
            </div>
            <div style="border: 1px solid transparent;"></div>
            <div class="article-side" style="left: 424.5px;" id="aSide">
              <div class="star-btn" @click="star">
                <i
                  class="el-icon-star-off"
                  style="color:#ffa902; font-size:25px; padding:10px; cursor: pointer;"
                ></i>
              </div>
              <div class="count">8</div>
              <div class="item" @click="rollComment">
                <i
                  class="el-icon-chat-round"
                  style="color: #4c4e4d; font-size:25px; padding:10px; cursor: pointer;"
                ></i>
              </div>
              <div class="count">{{ newsData.reviewCount }}</div>
              <div class="item">
                <i
                  class="el-icon-share"
                  style="font-size:25px; color: #4c4e4d; cursor: pointer;"
                ></i>
              </div>
              <div class="item" @click="collect">
                <i
                  class="el-icon-collection-tag"
                  style="color: #4c4e4d; font-size:25px; padding:10px; cursor: pointer;"
                ></i>
              </div>
            </div>
          </div>
          <div class="article-tag articleWidth-content-687" id="article-tag">
            <div class="tag-container">
              <div class="tag-item" v-for="tag in tags" :key="tag">
                <a href="javascript:;" class="tag">
                  <span class="sub">#</span>
                  {{ tag }}
                </a>
              </div>
            </div>
          </div>
          <div class="articleWidth-687">
            <div class="line"></div>
          </div>
          <div
            class="article-author articleWidth-687"
            style="padding-bottom: 30px;"
          >
            <el-row>
              <div class="center">
                <div class="author">
                  <div class="cajr-portrait avatar" style="height: 32px">
                    <a href="javascript:;" target="_blank">
                      <img
                        :src="ossImgUrl + newsData.userOther.avatar"
                        style="width:32px; height:32px; border-radius:32px;"
                      />
                    </a>
                  </div>
                  <div class="container">
                    <div class="top">
                      <a href="javascript:;" target="_blank">
                        <span class="nickname">{{
                          newsData.userOther.username
                        }}</span>
                      </a>
                    </div>
                    <div
                      class="bio"
                      v-if="newsData.userOther.signature != null"
                    >
                      {{ newsData.userOther.signature }}
                    </div>
                    <div class="bio" v-else>这个人很懒～</div>
                    <div class="btn-box left-4">
                      <el-button size="mini" @click="follow">关 注</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </el-row>
          </div>
        </article>
        <div class="bgGrey" id="comment">
          <div class="comment">
            <div class="comment-container" id="article-comment-box">
              <div class="comment-header">
                <div class="comment-title">
                  全部评论（{{ reviewData.length }}）
                </div>
                <div class="review-box">
                  <div>
                    热门排序
                    <i class="el-icon-d-caret"></i>
                  </div>
                </div>
              </div>
              <div class="cajr-commentReply article-reply">
                <div class="reply-box">
                  <div>
                    <div class="title-box">
                      <div class="header-box">
                        <div
                          class="cajr-portrait header-img"
                          style="height: 40px;"
                        >
                          <a href="javascript:;" target="_blank">
                            <img
                              v-if="isLogin"
                              :src="avatar"
                              style="width:32px; height:32px; border-radius:32px;"
                            />
                            <img
                              v-else
                              src="../assets/defualtAvatar.png"
                              style="width:32px; height:32px; border-radius:32px;"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        class="txt input-txt"
                        @click="commmentBoxShow"
                        v-if="isLogin"
                      >
                        写下你的评论
                      </div>
                      <div class="txt input-txt" v-else>
                        请在
                        <a
                          href="javascript:;"
                          style="color:red;"
                          @click="commentStatus"
                          >登录</a
                        >后评论...
                      </div>
                    </div>
                    <div class="comment-box" v-show="isShowCommentBox">
                      <div class="backdrop">
                        <div class="highlights"></div>
                      </div>
                      <textarea
                        id="commentTextArea"
                        name="comment"
                        v-model="reviewForm.content"
                        class="textarea textarea-0"
                        @blur.prevent="isShowCommentBox = false"
                      ></textarea>
                      <div class="handle-box">
                        <el-button size="mini" @click="review" round
                          >评论</el-button
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment-list-box">
                <div
                  class="cajr-commentList comment-list"
                  v-for="review in reviewData"
                  :key="review.id"
                >
                  <div class="comment-container-box">
                    <div class="comment-user">
                      <div class="header-box">
                        <div
                          class="cajr-portrait header-img"
                          style="height: 40px;"
                        >
                          <a
                            :href="'/u/' + review.userOther.id"
                            target="_blank"
                          >
                            <img
                              :src="ossImgUrl + review.userOther.avatar"
                              style="width:32px; height:32px; border-radius:32px;"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="user-box">
                        <div class="between">
                          <div class="flex-start">
                            <a
                              class="name"
                              href="javascript:;"
                              @click="goUser(review.userOther.id)"
                              >{{ review.userOther.username }}</a
                            >
                          </div>
                        </div>
                        <div class="time-box text-ellipsis"></div>
                      </div>
                    </div>
                    <div class="comment-content-box">
                      <div class="comment-content">
                        <div class="comment-txt">
                          <div>
                            <div class="wangEditor-txt">
                              {{ review.content }}
                            </div>
                          </div>
                        </div>
                        <div class="article-icon-box">
                          <div class="article-handle-box">
                            <div class="pic-box">
                              <i
                                class="el-icon-chat-round"
                                @click="showCallTextArea"
                              ></i>
                              <span class="name">
                                {{ review.replyList.length }}
                              </span>
                            </div>
                            <div class="pic-box">
                              <i
                                class="el-icon-caret-top"
                                style="color:red;"
                              ></i>
                              <span class="name">{{ review.likeNum }}</span>
                            </div>
                            <div class="pic-box">
                              <i class="el-icon-caret-bottom"></i>
                              <span class="name">{{ review.unlikeNum }}</span>
                            </div>
                          </div>
                          <div class="pic-box">
                            <span class="time">{{ review.time }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="comment-content-box">
                    <div class="comment-child-box">
                      <div
                        class="comment-child-item"
                        v-for="reply in review.replyList"
                        :key="reply.id"
                      >
                        <div class="comment-user">
                          <div class="header-box">
                            <div
                              class="cajr-portrait header-img"
                              style="height: 40px;"
                            >
                              <a href="javascript:;" target="_blank">
                                <img
                                  :src="ossImgUrl + reply.userOther.avatar"
                                  style="width:32px; height:32px; border-radius:32px;"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="user-box">
                            <div class="between">
                              <div class="flex-start">
                                <a class="name">
                                  {{ reply.userOther.username }}
                                </a>
                                <div v-if="reply.repliedUserOther.id > 0">
                                  &nbsp;
                                  <span class="txt">回复</span> &nbsp;
                                  <a
                                    class="txt"
                                    href="javascript:;"
                                    target="_blank"
                                    >{{ reply.repliedUserOther.username }}</a
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="time-box text-ellipsis"></div>
                          </div>
                        </div>
                        <div class="comment-content-box">
                          <div class="comment-content">
                            <div class="comment-txt">
                              <div>
                                <div class="wangEditor-txt">
                                  {{ reply.content }}
                                </div>
                              </div>
                            </div>
                            <div class="article-icon-box">
                              <div class="article-handle-box">
                                <div class="pic-box">
                                  <i
                                    class="el-icon-chat-round"
                                    @click="showCallTextArea"
                                  ></i>
                                </div>
                                <div class="pic-box">
                                  <i
                                    class="el-icon-caret-top"
                                    style="color:red;"
                                  ></i>
                                  <span class="name">{{ reply.likeNum }}</span>
                                </div>
                                <div class="pic-box">
                                  <i class="el-icon-caret-bottom"></i>
                                  <span class="name">
                                    {{ reply.unlikeNum }}
                                  </span>
                                </div>
                              </div>
                              <div class="pic-box">
                                <span class="time">{{ reply.time }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="commentReply-box"
                      id="commentReply-form"
                      v-show="isShowCall"
                      style="margin-bottom:30px;"
                    >
                      <div class="cajr-commentReply article-reply">
                        <div class="reply-box">
                          <div>
                            <div class="title-box">
                              <div class="header-box">
                                <div
                                  class="cajr-portrait header-img"
                                  style="height: 40px;"
                                >
                                  <a href="javascript:;" target="_blank">
                                    <img
                                      :src="ossImgUrl + userInfo.avatar"
                                      style="width:32px; height:32px; border-radius:32px;"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div>
                                <a
                                  class="name"
                                  href="javascript:;"
                                  target="_blank"
                                  style="font-size: 14px;"
                                  >{{ userInfo.userName }}</a
                                >
                                <div>
                                  &nbsp;
                                  <span class="txt">回复</span> &nbsp;
                                  <a
                                    class="txt"
                                    href="javascript:;"
                                    target="_blank"
                                    >{{ review.userOther.username }}</a
                                  >
                                </div>
                              </div>
                            </div>
                            <div class="comment-box">
                              <div class="backdrop">
                                <div class="highlights"></div>
                              </div>
                              <textarea
                                id="callTextArea"
                                name="comment"
                                v-model="replyForm.content"
                                class="textarea textarea-0"
                                @blur.prevent="isShowCall = false"
                              ></textarea>
                              <div class="handle-box">
                                <el-button
                                  size="mini"
                                  @click="reply(review.userOther.id, review.id)"
                                  round
                                  >回复</el-button
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="load-more-wrapper nomore">没有更多评论了哦</div>
            </div>
          </div>
          <div class="related-read-box">
            <div class="header">推荐阅读</div>
            <cajr-rec-card :datas="articleRecData"></cajr-rec-card>
          </div>
        </div>
      </div>
    </div>
    <cajr-footer></cajr-footer>
    <el-backtop :bottom="80"></el-backtop>
  </div>
</template>

<script>
import cajrHeader from "./../components/_cajr-header";
import cajrFooter from "./../components/_cajr-footer";
import cajrRecCard from "./../components/_cajr-article-card";
import Serve from "../global/request";

export default {
  data() {
    return {
      isBanner: true,
      isShowCommentBox: false,
      isUserComment: false,
      isShowCall: false,
      articleRecData: [],
      newsData: {},
      newsContent: [],
      userInfo: {},
      tags: [],
      avatar: "",
      isLogin: false,
      reviewData: [],
      ossImgUrl: "",
      newslog: {
        userId: 0,
        newsId: 0
      },
      newsContentHtml: "",
      isHtml: false,
      reviewForm: {
        newsId: 0,
        userId: 0,
        content: ""
      },
      replyForm: {
        repliedUserId: 0,
        reviewId: 0,
        userId: 0,
        content: ""
      }
    };
  },
  created() {
    this.loginStatus();
    this.newsLogs();
    this.newsDetails();
    this.getNewsReview();
    this.render();
    this.ossImgUrl = this.$store.getters.ossImgUrl;
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  methods: {
    loginStatus() {
      if (localStorage.getItem("isLogin") == "true") {
        this.isLogin = true;
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.userInfo.userName = localStorage.getItem("user_name");
        this.avatar = this.$store.getters.ossImgUrl + this.userInfo.avatar;
      } else {
        this.isLogin = false;
      }
    },
    newsLogs() {
      if (this.isLogin) {
        let userId = localStorage.getItem("userId");
        let newsId = this.$route.params.id;
        this.newslog.userId = userId;
        this.newslog.newsId = newsId;
        Serve.newsLogs(this.newslog).then(res => {
          console.info(res);
        });
      }
    },
    newsDetails() {
      Serve.getOneNews(this.$route.params.id).then(res => {
        this.newsData = res;
        if (res.status == 1) {
          this.isHtml = false;
          this.newsContent = res.contentList;
        } else {
          this.newsData.banner = this.ossImgUrl + res.banner;
          this.isHtml = true;
          this.newsContentHtml = res.allContent;
        }
        this.isBanner = res.existBanner;
        this.tags = res.tags;
      });
    },
    render() {
      Serve.newsSpecialsList().then(res => {
        let data = [];
        for (let i = 0; i < 6; i++) {
          data.push(res.data[i]);
        }
        console.info(data);
        this.articleRecData = data;
      });
    },
    getNewsReview() {
      let newsId = this.$route.params.id;
      Serve.getNewsReview(newsId)
        .then(res => {
          this.reviewData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getScroll() {
      var aHeader = document.getElementById("aHeader");
      var aBody = document.getElementById("aBody");
      // console.info(aHeader.scrollHeight+aBody.scrollHeight);
      if (
        document.documentElement.scrollTop >=
        aHeader.scrollHeight + aBody.scrollHeight - 500
      ) {
        document.getElementById("aSide").setAttribute("class", "sideFixed");
      } else {
        document.getElementById("aSide").setAttribute("class", "article-side");
      }
    },
    commmentBoxShow() {
      document.getElementById("commentTextArea").focus();
      this.isShowCommentBox = true;
    },
    showCallTextArea() {
      document.getElementById("callTextArea").focus();
      this.isShowCall = true;
    },
    comment() {},
    rollComment() {
      document.getElementById("comment").scrollIntoView();
    },
    commentStatus() {
      this.$refs.articleHeader._isLoginDialogShow();
    },
    follow() {
      if (localStorage.getItem("isLogin") === "true") {
        console.log();
      } else {
        this.$refs.articleHeader._isLoginDialogShow();
      }
    },
    star() {
      // eslint-disable-next-line no-empty
      if (this.isLogin) {
      } else {
        this.$refs.articleHeader._isLoginDialogShow();
      }
    },
    collect() {
      // eslint-disable-next-line no-empty
      if (this.isLogin) {
      } else {
        this.$refs.articleHeader._isLoginDialogShow();
      }
    },
    review() {
      // eslint-disable-next-line no-empty
      if (this.isLogin) {
        this.reviewForm.userId = this.userInfo.id;
        this.reviewForm.newsId = this.$route.params.id;
        Serve.postReview(this.reviewForm).then(res => {
          if (res.data == 1) {
            this.$router.go(0);
            document.getElementById("callTextArea").focus();
          }
        });
      } else {
        this.$refs.articleHeader._isLoginDialogShow();
      }
    },
    reply(repliedUserId, reviewId) {
      if (this.isLogin) {
        this.replyForm.userId = this.userInfo.id;
        this.replyForm.repliedUserId = repliedUserId;
        this.replyForm.reviewId = reviewId;
        Serve.postReply(this.replyForm).then(res => {
          if (res.data == 1) {
            this.$router.go(0);
            document.getElementById("callTextArea").focus();
          }
        });
      } else {
        this.$refs.articleHeader._isLoginDialogShow();
      }
    },
    goUser(userId) {
      this.$router.push({ path: `/u/${userId}` });
    }
  },
  components: {
    "cajr-header": cajrHeader,
    "cajr-footer": cajrFooter,
    "cajr-rec-card": cajrRecCard
  }
};
</script>

<style lang="less">
.center {
  position: relative;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 410px;
  .author {
    display: flex;
    .container {
      padding-left: 20px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      .top {
        display: inline-flex;
        align-items: center;
      }
      .bio {
        font-size: 14px;
        line-height: 20px;
        color: #8e8787;
        margin-bottom: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 40px;
      }
      button {
        color: red;
        background: #f5f5f5;
        border: 1px solid transparent;
        &:hover {
          color: #fff;
          background: red;
        }
      }
    }
  }
}
.line {
  height: 1px;
  background: #e5e5e5;
  margin: 30px auto;
  width: 687px;
}
.articcle-wrapper {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #292525;
  -webkit-tap-highlight-color: transparent;
}
.cajr-portrait {
  display: inline-block;
  vertical-align: middle;
  height: auto;
  line-height: normal;
  position: relative;
}
.articleWidth-content {
  width: 100%;
  max-width: 664px;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.articleWidth-content-687 {
  width: 100%;
  max-width: 687px;
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.postPage {
  .article-header {
    position: relative;
    padding-top: 20px;
    z-index: 5;
    .greyBox {
      width: 100%;
      height: 280px;
      background: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(#f4f4f4),
        to(#f4f4f4)
      );
      background: linear-gradient(0deg, #f4f4f4, #f4f4f4);
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .article-banner {
      margin: 0 auto;
      position: relative;
      .banner {
        width: 100%;
      }
    }
    .articleWidth-content {
      width: 100%;
      max-width: 664px;
      margin: 0 auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      .article-title {
        margin: 40px auto 30px;
        font-weight: 500;
        font-size: 28px;
        line-height: 42px;
        color: #292525;
      }
      .article-author {
        position: relative;
        margin-bottom: 60px;
        padding-right: 120px;
        .author-box {
          .article-header-author {
            .avatar {
              margin-left: 0;
              position: relative;
            }
          }
          .nickname {
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
            line-height: 20px;
            color: #292525;
            font-weight: 400;
            margin-left: 10px;
          }
        }
        .timer {
          position: absolute;
          color: #655e5e;
          right: 0;
          top: 12.5px;
          font-size: 14px;
          line-height: 20px;
        }
        .container {
          padding-left: 20px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
        }
      }
    }
  }
  .article-body {
    position: relative;
    .wangEditor-txt {
      position: relative;
      z-index: 91;
    }
    .sideFixed {
      position: absolute;
      bottom: 0;
      text-align: center;
      -webkit-transform: translateY(0);
      transform: translateY(0);
      left: 0;
      top: auto;
      .item {
        margin-top: 20px;
      }
      .star-btn {
        width: 48px;
        height: 48px;
        border-radius: 48px;
        text-align: center;
        line-height: 48px;
        background: #f5f5f5;
        -webkit-transition: background 0.5s;
        transition: background 0.5s;
        margin-bottom: 8px;
        cursor: pointer;
        &:hover {
          background: #fff;
        }
      }
      .count {
        font-size: 12px;
        line-height: 17px;
        color: #8e8787;
      }
    }
  }
}

.wangEditor-txt {
  width: 100%;
  text-align: left;
  padding: 0;
  margin-top: 5px;
  font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular,
    Hiragino Sans GB, Microsoft Yahei, Arial, sans-serif;
  font-size: 16px;
  color: #4c4e4d;
  line-height: 30px;
  font-weight: 400;
  word-break: normal;
  word-wrap: break-word;
  -webkit-tap-highlight-color: transparent;
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    margin-top: 60px;
    margin-bottom: 26px;
    line-height: 140%;
  }
  p {
    margin: 0 0 20px 0;
    line-height: 30px;
    img {
      max-width: 100%;
      position: relative;
      text-align: center;
      outline: none;
      margin: 40px auto;
    }
  }
}
img {
  vertical-align: middle;
}
.article-side {
  text-align: center;
  position: fixed;
  bottom: 50%;
  -webkit-transform: translateY(50%);
  transform: translateY(50%);
  z-index: 90;
  .item {
    margin-top: 20px;
  }
  .star-btn {
    width: 48px;
    height: 48px;
    border-radius: 48px;
    text-align: center;
    line-height: 48px;
    background: #f5f5f5;
    -webkit-transition: background 0.5s;
    transition: background 0.5s;
    margin-bottom: 8px;
    cursor: pointer;
    &:hover {
      background: #fff;
    }
  }
  .count {
    font-size: 12px;
    line-height: 17px;
    color: #8e8787;
  }
}
.article-tag {
  margin-top: 60px;
  .tag-container {
    margin: -8px;
    .tag-item {
      padding: 8px;
      display: inline-block;
      a {
        text-decoration: none;
        color: #292525;
        -webkit-tap-highlight-color: transparent;
      }
    }
  }
}
.tag {
  font-size: 12px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #655e5e;
  padding: 5px 10px;
  background: #f5f5f5;
  .sub {
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: #8e8787;
    margin-right: 2px;
  }
}
.article-actionBar {
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  .star-btn {
    padding: 10px 14px;
    border-radius: 42px;
    text-align: center;
    background: #f4f4f4;
    -webkit-transition: background 0.5s;
    transition: background 0.5s;
    cursor: pointer;
    margin-right: 30px;
    .focus {
      background: #ffa902;
    }
  }
}
.star-btn.focus {
  background: #ffa902;
}
.bgGrey {
  background: #f4f4f4;
  padding: 40px 0;
  .related-read-box {
    width: 100%;
    max-width: 832px;
    margin: 30px auto 0;
    .header {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.06em;
      color: #655e5e;
      margin-bottom: 30px;
      text-align: center;
    }
  }
}
.comment {
  .load-more-wrapper {
    text-align: center;
    background: #fff;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    color: #655e5e;
    .nomore {
      color: #8e8787;
      cursor: text;
    }
  }
  .comment-container {
    width: 100%;
    max-width: 664px;
    margin: 0 auto;
    margin-top: 40px;
    .comment-header {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.06em;
      color: #655e5e;
      text-align: center;
      position: relative;
      .review-box {
        position: absolute;
        font-size: 14px;
        right: 0;
        top: 0;
        color: #8e8787;
        cursor: pointer;
      }
    }
    .cajr-commentReply {
      .reply-box {
        padding: 16px;
        background: #fff;
        .title-box {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          font-size: 14px;
          cursor: pointer;
          .header-box {
            width: 40px;
            height: 40px;
            overflow: hidden;
            margin-right: 14px;
          }
          .txt {
            color: #8e8787;
          }
          .input-txt {
            -webkit-box-flex: 1;
            flex: 1;
            cursor: text;
          }
        }
        .header-img {
          width: 40px;
        }
        .comment-box {
          position: relative;
          padding-left: 54px;
          margin-top: 10px;
          .backdrop {
            position: absolute;
            z-index: 2;
            top: 0;
            padding: 2px;
            color: #211615;
            width: calc(100% - 54px);
            height: 122px;
            background-color: #fff;
            color: #292525;
            overflow: auto;
            pointer-events: none;
            -webkit-transition: -webkit-transform 1s;
            transition: -webkit-transform 1s;
            transition: transform 1s;
            transition: transform 1s, -webkit-transform 1s;
            .highlight {
              font-size: 16px;
              font-weight: 400;
              line-height: 1.6;
              color: transparent;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
          }
          .handle-box {
            button {
              border: 1px solid transparent;
              background: #f5f5f5;
            }
          }
        }
      }
      .textarea {
        position: relative;
        z-index: 2;
        margin-bottom: 20px;
        width: 100%;
        min-height: 122px;
        height: auto;
        background-color: transparent;
        color: #292525;
      }
    }
  }
  .comment-list-box {
    margin-top: 8px;
    .comment-list {
      margin-bottom: 8px;
      .comment-container-box {
        padding: 10px 0;
        .comment-user {
          display: -webkit-box;
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          .header-box {
            width: 40px;
            height: 40px;
            margin-right: 14px;
            .header-img {
              width: 40px;
            }
          }
          .user-box {
            overflow: hidden;
            -webkit-box-flex: 1;
            flex: 1;
            .between {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-pack: justify;
              -ms-flex-pack: justify;
              justify-content: space-between;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              .flex-start {
                display: inline-flex;
              }
            }
            .time-box {
              color: #8e8787;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
.article-reply {
  margin-top: 30px;
}
.cajr-commentReply {
  .backdrop {
    font-size: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    resize: none;
    border: none;
    font-weight: 400;
    line-height: 1.6;
  }
}
.textarea-0 {
  font-size: 16px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  resize: none;
  border: none;
  font-weight: 400;
  line-height: 1.6;
}
.cajr-commentList {
  width: 100%;
  padding: 10px 20px 4px 20px;
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  .comment-content-box {
    padding-left: 54px;
    .comment-content {
      margin-bottom: 10px;
      .comment-txt {
        margin-top: 8px;
        line-height: 1.4;
        font-size: 16px;
        color: #4c4e4d;
        word-wrap: break-word;
      }
      .article-icon-box {
        display: flex;
        margin-top: 16px;
        min-height: 20px;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        .article-handle-box {
          display: flex;
          .pic-box {
            .name {
              margin-left: 5px;
            }
            i {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  .icon {
    transition: all 0.1s;
  }
  .pic-box {
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8e8787;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
  .comment-child-box {
    .comment-child-item {
      padding: 10px 0;
    }
  }
  .comment-user {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    .header-box {
      width: 40px;
      height: 40px;
      margin-right: 14px;
      .header-img {
        width: 40px;
      }
    }
    .user-box {
      overflow: hidden;
      -webkit-box-flex: 1;
      flex: 1;
      .between {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .flex-start {
          display: inline-flex;
        }
      }
      .time-box {
        color: #8e8787;
        font-size: 12px;
      }
      .txt {
        color: #8e8787;
        font-size: 13px;
      }
    }
  }
  .commentReply-box {
    position: relative;
    margin-top: 20px;
    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%) scale(0.5);
      transform: translate(-50%, -50%) scale(0.5);
      height: 200%;
      width: 200%;
      border: 2px solid #e5e5e5;
    }
  }
  .reply-box {
    .title-box {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      font-size: 14px;
    }
  }
}
.text_ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.time {
  font-size: 14px;
}
</style>
