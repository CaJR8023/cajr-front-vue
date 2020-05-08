<template>
  <div class="search-container">
    <div class="search-content">
      <div class="article">
        <cajr-article-card
          :keyWord="searchInput"
          ref="searchArticle"
        ></cajr-article-card>
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
</template>

<script>
import cajrArticleCard from "./../components/_cajr-search-article-card";
// eslint-disable-next-line no-unused-vars
import Serve from "../global/request";

export default {
  props: ["searchInput"],
  data() {
    return {};
  },
  created() {},
  methods: {
    search() {
      this.$refs.searchArticle.search();
    }
  },
  components: {
    "cajr-article-card": cajrArticleCard
  }
};
</script>

<style lang="less">
.search-container {
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 40px;
  min-height: 650px;
  .search-content {
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    .article {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      width: 100%;
      max-width: 852px;
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
</style>
