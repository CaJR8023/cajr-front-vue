<template>
  <div class="cajr-article-page" style=" background-color: #fff;">
    <cajr-header></cajr-header>
    <div class="postPage articlel-wrapper">
      <div class="article-detail">
        <article class="normal-article">
          <div class="article-header normal">
            <div class="greyBox"></div>
            <div class="article-banner" style="width:710px; height: 354px;">
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
          <div class="article-body"></div>
        </article>
      </div>
    </div>
    <cajr-footer></cajr-footer>
  </div>
</template>

<script>
import cajrHeader from "./../components/_cajr-header";
import cajrFooter from "./../components/_cajr-footer";

export default {
  data() {
    return {};
  },
  components: {
    "cajr-header": cajrHeader,
    "cajr-footer": cajrFooter
  }
};
</script>

<style lang="less">
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
      }
    }
  }
  .article-body {
    position: relative;
  }
}
</style>
