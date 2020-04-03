<template>
  <div class="cajr-article-page" style=" background-color: #fff;">
    <cajr-header></cajr-header>
    <div class="postPage articlel-wrapper">
      <div class="article-detail">
        <article class="normal-article">
          <div class="article-header normal" id="aHeader">
            <div class="greyBox" v-show="isBanner"></div>
            <div
              class="article-banner"
              style="width:710px; height: 354px;"
              v-show="isBanner"
            >
              <img
                src="https://cdn.sspai.com/2020/03/26/9a4638c9daba3bddb2a2b3344ba5d09f.jpg?imageMogr2/quality/95/thumbnail/!1420x708r/gravity/Center/crop/1420x708/interlace/1"
                class="banner"
                style="width:710px; height: 354px"
              />
            </div>
            <div class="articleWidth-content">
              <div class="article-title" id="articleTitle">
                修改 AirDrop 文件存放位置
              </div>
              <div class="article-author">
                <div class="author-box" style="min-width: 400px;">
                  <div class="article-header-author">
                    <div class="cajr-portrait avatar" style="height: 32px">
                      <a href="javascript:;" target="_blank">
                        <img
                          src="../assets/github.png"
                          style="width:32px; height:32px; border-radius:32px;"
                        />
                      </a>
                    </div>
                    <a href="javascript:;" target="_blank">
                      <span class="nickname">CAJR</span>
                    </a>
                  </div>
                </div>
                <div class="timer">两天前</div>
              </div>
            </div>
          </div>
          <div class="article-body" id="aBody">
            <div class="articleWidth-content">
              <div class="content wangEditor-txt minHeight">
                <p>
                  2016 年和 2017
                  年我出去玩都有尝试过随身携带本子记手帐，记录每天的花销，顺便画一下旅途中的事物，既可以方便回来之后总结账单，也可以起到纪念的作用。但是随身掏出本子来画画实际用在我四处乱走一通的旅行当中，先不说画的质量和需要的时间，可能还存在着更多使用场景上的困难，比如在摇摇晃晃的公交车上，或者在拥挤的地铁里，都不太适合把本子掏出来做记录，脑瓜子不太中用的时刻，可能下一秒就忘了刚刚灵光一闪想要画下来的东西，也很可能不记得刚刚花了多少钱以及买了什么。
                </p>
                <p>
                  2018 年我买了 iPad
                  Pro，也在旅途手帐上做了一个新的尝试——电子手帐，我用 iPad Pro
                  在熊掌记上写旅行日记，把每天的见闻记下来，以插入照片的形式记账，感觉效果也还是蛮不错的。现在想一下唯一的缺点就是总结账单的时候还是需要手工重新计算一遍。
                </p>
                <p>
                  十一去台湾玩，我尝试了一下新的电子化流程，背在包里随时准备拿出来写随笔的
                  iPad Pro 和键盘也被手机代替了—— Scannable + Timi
                  时光记账是我现在的全新选择。
                </p>
                <p>
                  <img src="../assets/iphone.jpg" />
                </p>
                <p>
                  十一去台湾玩，我尝试了一下新的电子化流程，背在包里随时准备拿出来写随笔的
                  iPad Pro 和键盘也被手机代替了—— Scannable + Timi
                  时光记账是我现在的全新选择。
                </p>
                <p>
                  十一去台湾玩，我尝试了一下新的电子化流程，背在包里随时准备拿出来写随笔的
                  iPad Pro 和键盘也被手机代替了—— Scannable + Timi
                  时光记账是我现在的全新选择。
                </p>
              </div>
            </div>
            <div style="border: 1px solid transparent;"></div>
            <div class="article-side" style="left: 424.5px;" id="aSide">
              <div class="star-btn">
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
              <div class="count">8</div>
              <div class="item">
                <i
                  class="el-icon-share"
                  style="font-size:25px; color: #4c4e4d; cursor: pointer;"
                ></i>
              </div>
              <div class="item">
                <i
                  class="el-icon-collection-tag"
                  style="color: #4c4e4d; font-size:25px; padding:10px; cursor: pointer;"
                ></i>
              </div>
            </div>
          </div>
          <div class="article-tag articleWidth-content-687" id="article-tag">
            <div class="tag-container">
              <div class="tag-item">
                <a href="javascript:;" class="tag">
                  <span class="sub">#</span>macOS
                </a>
              </div>
              <div class="tag-item">
                <a href="javascript:;" class="tag">
                  <span class="sub">#</span>一日一记
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
                        src="../assets/github.png"
                        style="width:32px; height:32px; border-radius:32px;"
                      />
                    </a>
                  </div>
                  <div class="container">
                    <div class="top">
                      <a href="javascript:;" target="_blank">
                        <span class="nickname">CAJR</span>
                      </a>
                    </div>
                    <div class="bio">这个人很懒～</div>
                    <div class="btn-box left-4">
                      <el-button size="mini" round>关 注</el-button>
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
                <div class="comment-title">全部评论（4）</div>
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
                              src="../assets/github.png"
                              style="width:32px; height:32px; border-radius:32px;"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="txt input-txt" @click="commmentBoxShow">
                        写下你的评论
                      </div>
                    </div>
                    <div class="comment-box" v-show="isShowCommentBox">
                      <div class="backdrop">
                        <div class="highlights"></div>
                      </div>
                      <textarea
                        id="commentTextArea"
                        name="comment"
                        class="textarea textarea-0"
                        @blur.prevent="isShowCommentBox = false"
                      ></textarea>
                      <div class="handle-box">
                        <el-button size="mini" round>评论</el-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment-list-box">
                <div class="cajr-commentList comment-list">
                  <div class="comment-container-box">
                    <div class="comment-user">
                      <div class="header-box">
                        <div
                          class="cajr-portrait header-img"
                          style="height: 40px;"
                        >
                          <a href="javascript:;" target="_blank">
                            <img
                              src="../assets/github.png"
                              style="width:32px; height:32px; border-radius:32px;"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="user-box">
                        <div class="between">
                          <div class="flex-start">
                            <a class="name">CAJR</a>
                          </div>
                        </div>
                        <div class="time-box text-ellipsis"></div>
                      </div>
                    </div>
                    <div class="comment-content-box">
                      <div class="comment-content">
                        <div class="comment-txt">
                          <div>
                            <div class="wangEditor-txt">Comment content</div>
                          </div>
                        </div>
                        <div class="article-icon-box">
                          <div class="article-handle-box">
                            <div class="pic-box">
                              <i
                                class="el-icon-chat-round"
                                @click="showCallTextArea"
                              ></i>
                              <span class="name">2</span>
                            </div>
                            <div class="pic-box">
                              <i class="el-icon-caret-top"></i>
                              <span class="name">2</span>
                            </div>
                            <div class="pic-box">
                              <i class="el-icon-caret-bottom"></i>
                              <span class="name">2</span>
                            </div>
                          </div>
                          <div class="pic-box">
                            <span class="time">2小时前</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="comment-content-box">
                    <div class="comment-child-box">
                      <div class="comment-child-item">
                        <div class="comment-user">
                          <div class="header-box">
                            <div
                              class="cajr-portrait header-img"
                              style="height: 40px;"
                            >
                              <a href="javascript:;" target="_blank">
                                <img
                                  src="../assets/github.png"
                                  style="width:32px; height:32px; border-radius:32px;"
                                />
                              </a>
                            </div>
                          </div>
                          <div class="user-box">
                            <div class="between">
                              <div class="flex-start">
                                <a class="name">CAJR</a>
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
                                  Child Comment content
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
                                  <span class="name">1</span>
                                </div>
                                <div class="pic-box">
                                  <i class="el-icon-caret-top"></i>
                                  <span class="name">1</span>
                                </div>
                                <div class="pic-box">
                                  <i class="el-icon-caret-bottom"></i>
                                  <span class="name">0</span>
                                </div>
                              </div>
                              <div class="pic-box">
                                <span class="time">1小时前</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Child comment -->
                    <div class="comment-child-box" style>
                      <div class="comment-child-item">
                        <div class="comment-user">
                          <div class="header-box">
                            <div
                              class="cajr-portrait header-img"
                              style="height: 40px;"
                            >
                              <a href="javascript:;" target="_blank">
                                <img
                                  src="../assets/QQ.png"
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
                                  target="_blank"
                                  >CAJR</a
                                >
                                <div>
                                  &nbsp;
                                  <span class="txt">回复</span> &nbsp;
                                  <a
                                    class="txt"
                                    href="javascript:;"
                                    target="_blank"
                                    >CAJR</a
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
                                  Child Comment content
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
                                  <span class="name">1</span>
                                </div>
                                <div class="pic-box">
                                  <i class="el-icon-caret-top"></i>
                                  <span class="name">1</span>
                                </div>
                                <div class="pic-box">
                                  <i class="el-icon-caret-bottom"></i>
                                  <span class="name">0</span>
                                </div>
                              </div>
                              <div class="pic-box">
                                <span class="time">1小时前</span>
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
                                      src="../assets/github.png"
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
                                  >CAJR</a
                                >
                                <div>
                                  &nbsp;
                                  <span class="txt">回复</span> &nbsp;
                                  <a
                                    class="txt"
                                    href="javascript:;"
                                    target="_blank"
                                    >CAJR</a
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
                                class="textarea textarea-0"
                                @blur.prevent="isShowCall = false"
                              ></textarea>
                              <div class="handle-box">
                                <el-button size="mini" round>回复</el-button>
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
import Server from "../global/request";

export default {
  data() {
    return {
      isBanner: true,
      isShowCommentBox: false,
      isUserComment: false,
      isShowCall: false,
      articleRecData: []
    };
  },
  created() {
    this.render();
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  methods: {
    render() {
      Server.newsSpecialsList().then(res => {
        let data = [];
        for (let i = 0; i < 6; i++) {
          data.push(res.data[i]);
        }
        console.info(data);
        this.articleRecData = data;
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
      this.isShowCall = true;
      document.getElementById("callTextArea").focus();
    },
    rollComment() {
      document.getElementById("comment").scrollIntoView();
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
          .top {
          }
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
      .comment-title {
      }
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
