<template>
  <div class="search-container">
    <div class="search-content">
      <div class="user">
        <cajr-search-user-card></cajr-search-user-card>
      </div>
      <div class="right">
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
import cajrUserCard from "./../components/_cajr-search-user-card";

export default {
  data() {
    return {};
  },
  components: {
    "cajr-search-user-card": cajrUserCard
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
    .right {
      position: absolute;
      right: 0;
      top: 0;
      width: 252px;

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
