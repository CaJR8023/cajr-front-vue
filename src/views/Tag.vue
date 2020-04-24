<template>
  <div>
    <cajr-header></cajr-header>
    <div class="tag-page">
      <div class="head">
        <span class="text">{{ tag.name }}🏷</span>
      </div>
      <div class="container">
        <div class="count">相关文章 {{ tag.newsNum }} 篇</div>
        <div class="content">
          <div class="article">
            <cajr-article-card :datas="articleTagData"></cajr-article-card>
            <el-button
              v-show="isMoreDataBtnShow"
              @click="moreData"
              style="margin:10px auto;display:block;"
              round
              >查看更多内容 >></el-button
            >
          </div>
          <div class="right">
            <div class="cajr-recommend-tag">
              <div class="rec-tag-head">推荐标签</div>
              <div class="rec-tag-container">
                <a href="/tag" target="_blank">
                  <div class="tag-item">
                    #
                    <span style="margin-left: 2px;">嘻嘻嘻</span>
                  </div>
                </a>
                <a href="/tag" target="_blank">
                  <div class="tag-item">
                    #
                    <span style="margin-left: 2px;">嘿嘿</span>
                  </div>
                </a>
                <a href="/tag" target="_blank">
                  <div class="tag-item">
                    #
                    <span style="margin-left: 2px;">cajr cajr cajr cajr</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="cajr-hot-article">
              <div class="hot-article-head">热门文章</div>
              <div class="hot-article-content">
                <div>
                  <div class="hot-article-content-item">
                    <a href="/post" target="_blank">
                      <div class="content-item-portrait" style="height:32px;">
                        <img
                          style=" width: 32px;
                        height: 32px;
                        border-radius: 32px;"
                          src="../assets/github.png"
                        />
                      </div>
                      <div class="content-item-content">
                        <div class="author-name">
                          <a href="/u" target="_blank">cajr</a>
                        </div>
                        <div class="title">
                          <a href="/u" target="_blank"
                            >我的 SET 法则，帮我管理好每一天的时间 | 年度征文</a
                          >
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="hot-article-content-item">
                    <a href="/post" target="_blank">
                      <div class="content-item-portrait" style="height:32px;">
                        <img
                          style=" width: 32px;
                        height: 32px;
                        border-radius: 32px;"
                          src="../assets/github.png"
                        />
                      </div>
                      <div class="content-item-content">
                        <div class="author-name">
                          <a href="/u" target="_blank">cajr</a>
                        </div>
                        <div class="title">
                          <a href="/u" target="_blank"
                            >我的 SET 法则，帮我管理好每一天的时间 | 年度征文</a
                          >
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
import cajrArticleCard from "./../components/_cajr-article-card";
import Serve from "../global/request";

export default {
  data() {
    return {
      articleTagData: [],
      tagId: 0,
      tag: {},
      isMoreDataBtnShow: false
    };
  },
  created() {
    this.initTagInfo();
  },
  methods: {
    initTagInfo() {
      this.tagId = this.$route.params.id;
      Serve.getOneTag(this.tagId).then(res => {
        this.tag = res.data;
        this.articleTagData = res.data.newsList;
        if (this.articleTagData.length >= 6) {
          this.isMoreDataBtnShow = true;
        }
      });
    },
    moreData() {}
  },
  components: {
    "cajr-header": cajrHeader,
    "cajr-article-card": cajrArticleCard,
    "cajr-footer": cajrFooter
  }
};
</script>

<style lang="less">
.tag-page {
  .head {
    background: #fff;
    height: 120px;
    width: 100%;
    line-height: 120px;
    font-size: 32px;
    color: #292525;
    text-align: center;
    z-index: 50;
    .text {
      background: #fff;
      height: 120px;
      width: 100%;
      line-height: 120px;
      font-size: 32px;
      color: #292525;
      text-align: center;
      z-index: 50;
    }
  }
  .container {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding-top: 40px;
    min-height: 534px;
    .count {
      font-size: 14px;
      line-height: normal;
      letter-spacing: 0.1em;
      color: #655e5e;
      padding-bottom: 20px;
    }
    .content {
      position: relative;
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      .article {
        -webkit-box-flex: 1;
        flex: 1;
        width: 100%;
        max-width: 852px;
        margin: -10px;
        padding-bottom: 20px;
      }
      .right {
        position: absolute;
        right: 0;
        top: 0;
        width: 252px;
        .cajr-recommend-tag {
          margin-bottom: 60px;
          .rec-tag-head {
            font-weight: 500;
            font-size: 18px;
            line-height: normal;
            letter-spacing: 0.1em;
            color: #655e5e;
            padding-bottom: 20px;
          }
          .rec-tag-container {
            width: 100%;
            margin: -5px;
            text-align: left;
            .tag-item {
              font-size: 12px;
              background: #fff;
              line-height: normal;
              letter-spacing: 0.05em;
              padding: 5px 10px;
              display: inline-block;
              margin: 5px;
            }
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
        .cajr-hot-article {
          .hot-article-head {
            font-weight: 500;
            font-size: 18px;
            line-height: normal;
            letter-spacing: 0.1em;
            color: #655e5e;
            padding-bottom: 20px;
          }
          .hot-article-content {
            .hot-article-content-item {
              width: 100%;
              position: relative;
              padding-left: 42px;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              margin-bottom: 30px;
              .content-item-portrait {
                position: absolute;
                top: 0;
                left: 0;
                line-height: normal;
                display: inline-block;
                vertical-align: middle;
              }
              .content-item-content {
                width: 100%;
                .author-name {
                  font-weight: 400;
                  font-size: 14px;
                  line-height: normal;
                  color: #292525;
                }
                .title {
                  font-weight: 400;
                  font-size: 14px;
                  line-height: normal;
                  letter-spacing: 0.05em;
                  color: #655e5e;
                  margin-top: 10px;
                  width: 100%;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                }
              }
            }
          }
        }
      }
    }
  }
}
a {
  text-decoration: none;
  color: #292525;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    color: red;
  }
}
</style>
