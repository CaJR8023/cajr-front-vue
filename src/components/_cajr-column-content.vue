<template>
  <div>
    <div class="column-content-main">
      <dl class="article-column-card">
        <dt>
          <div class="user-card block">
            <a class="avator" href>
              <img
                src="https://cdn.sspai.com/2019/09/04/avatar/9b1b1a208ac05861f443e8af528492a6.jpg?imageMogr2/quality/95/thumbnail/!80x80r/gravity/Center/crop/80x80"
                style="width:40px; height:40px;"
                lazy="loaded"
              />
            </a>
            <h4>
              <a href="#">cajr</a>
            </h4>
            <time>一天前</time>
          </div>
          <div class="more">
            <el-popover width="80px" trigger="click">
              <div style="text-align: center; margin: 0; ">
                <a href="javascript:;">收藏</a>
                <a href="javascript:;" style="margin-left: 10px">不喜欢</a>
              </div>
              <a href="javascript:;" slot="reference" style="color: #4a4a4a;">
                <span
                  class="el-icon-more-outline"
                  style="width: 24px; height: 24px;"
                ></span>
              </a>
            </el-popover>
          </div>
        </dt>
        <dd>
          <a href="#" class="thumb">
            <img src="../assets/about.png" />
          </a>
          <section>
            <h3 class="h3-title">
              <a href="/post">我是如何用 GoodNotes 5 做游记的</a>
            </h3>
            <summary class="desc">
              如果你关注 GoodNotes 的官方 Instagram
              账号，就会发现他们经常会在上面发布一些十分「厉害」的笔记截图，都来自真实用户的使用体验。无论是平常记录课堂笔记还是记日记和手账，GoodNotes
              都有很多趁手的功能可以使用。
            </summary>
          </section>
          <footer class="meta" style="padding:10px 0;">
            <div class="source">
              出自
              <a href="#" style="color:#d7191a; margin-right:5px;"
                >我和 App 的故事</a
              >
            </div>
            <div class="actions">
              <span class="like-views">
                <i class="icon el-icon-view" style="font-size:20px; "></i>
                <sup>20000</sup>
              </span>
              <a href="javascript:;">
                <i
                  class="icon el-icon-chat-dot-square"
                  style="font-size:20px; margin-left: 20px;"
                ></i>
                <sup>999+</sup>
              </a>
            </div>
          </footer>
        </dd>
      </dl>
      <dl class="article-column-card">
        <dt>
          <div class="user-card block">
            <a class="avator" href>
              <img
                src="https://cdn.sspai.com/2019/09/04/avatar/9b1b1a208ac05861f443e8af528492a6.jpg?imageMogr2/quality/95/thumbnail/!80x80r/gravity/Center/crop/80x80"
                style="width:40px; height:40px;"
                lazy="loaded"
              />
            </a>
            <h4>
              <a href="#">cajr</a>
            </h4>
            <time>一天前</time>
          </div>
          <div class="more">
            <el-popover width="80px" trigger="click">
              <div style="text-align: center; margin: 0; ">
                <a href="javascript:;">收藏</a>
                <a href="javascript:;" style="margin-left: 10px">不喜欢</a>
              </div>
              <a href="javascript:;" slot="reference" style="color: #4a4a4a;">
                <span
                  class="el-icon-more-outline"
                  style="width: 24px; height: 24px;"
                ></span>
              </a>
            </el-popover>
          </div>
        </dt>
        <dd>
          <a href="#" class="thumb">
            <img src="../assets/about.png" />
          </a>
          <section>
            <h3 class="h3-title">
              <a href="/post">我是如何用 GoodNotes 5 做游记的</a>
            </h3>
            <summary class="desc">
              如果你关注 GoodNotes 的官方 Instagram
              账号，就会发现他们经常会在上面发布一些十分「厉害」的笔记截图，都来自真实用户的使用体验。无论是平常记录课堂笔记还是记日记和手账，GoodNotes
              都有很多趁手的功能可以使用。
            </summary>
          </section>
          <footer class="meta" style="padding:10px 0;">
            <div class="source">
              出自
              <a href="#" style="color:#d7191a; margin-right:5px;"
                >我和 App 的故事</a
              >
            </div>
            <div class="actions">
              <span class="like-views">
                <i class="icon el-icon-view" style="font-size:20px; "></i>
                <sup>20000</sup>
              </span>
              <a href="javascript:;">
                <i
                  class="icon el-icon-chat-dot-square"
                  style="font-size:20px; margin-left: 20px;"
                ></i>
                <sup>999+</sup>
              </a>
            </div>
          </footer>
        </dd>
      </dl>
      <el-button
        class="column-more-Btn"
        @click="moreData"
        style="margin-bottom: 29px;display:block;"
        >更多数据</el-button
      >
    </div>
    <div class="column-content-side">
      <div class="author-card">
        <a href="#" class="avatar">
          <img src="../assets/github.png" style="width:80px; heifht:80px;" />
        </a>
        <span style="margin-bottom: 10px;">CAJR</span>
        <el-button size="mini" round style>专栏主编</el-button>
        <hr />
        <div class="desc">
          <div class="desc-info">
            <p>
              <a href="javascript:;">专栏作者</a>
              <span style="margin-left: 5px;">56</span>
            </p>
            <a href="/column/about" class="about-btn" style="margin-top:20px;"
              >关于</a
            >
          </div>
          <div class="desc-info">
            <p>
              <a href="javascript:;">关注人数</a>
              <span style="margin-left: 5px;">618</span>
            </p>
            <a href="/editor" class="about-btn" style="margin-top:20px;"
              >投稿</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.btn.dark-out-line {
  border-color: #292525;
  color: #292525;
}
.block {
  display: block;
}
.column-more-Btn {
  border: 1px solid #dbe2e8;
  box-shadow: 0 1px 2px rgba(46, 61, 73, 0.08);
  margin-top: 10px;
  display: block;
  height: 70px;
  background-color: #fff;
  text-align: center;
  line-height: 70px;
  width: 100%;
}
.like-views {
  color: #9b9b9b;
  sub {
    position: static;
    font-size: inherit;
    line-height: inherit;
    vertical-align: middle;
  }
}
.column-content-main {
  min-height: 10px;
  float: left;
  margin-right: 50px;
  max-width: 760px;
  .article-column-card {
    width: 720px;
    border: 1px solid #dbe2e8;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(46, 61, 73, 0.08);
    padding: 20px;
    margin: 0 0 20px;
    transition: border 0.3s ease-in-out;
    dt {
      position: relative;
      margin: 0 0 20px;
      .more {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    dd {
      margin: 0;
      .thumb {
        float: right;
        margin-left: 18px;
        img {
          transition: all 0.3s ease-in-out;
          width: 180px;
          display: block;
        }
      }
      .h3-title {
        font-size: 24px;
        font-size: 1.5rem;
        font-family: -apple-system, BlinkMacSystemFont, PingFang SC,
          Hiragino Sans GB, Microsoft YaHei, \\5fae\8f6f\96c5\9ed1,
          helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, Arial,
          sans-serif;
        margin: 0 0 10px;
        line-height: 1.5;
      }
      .desc {
        color: #4a4a4a;
        line-height: 1.625;
        font-size: 15px;
        margin: 0;
      }
      footer.meta {
        clear: both;
        margin-top: 25px;
        font-size: 14px;
        font-size: 0.875rem;
        color: #9b9b9b;
        .source {
          float: left;
        }
        .actions {
          float: right;
        }
        &::after {
          content: " ";
          overflow: hidden;
          clear: both;
          font-size: 0;
          display: block;
        }
      }
    }
    .user-card {
      .avatar {
        margin-right: 10px;
        display: inline-block;
        vertical-align: middle;
        position: relative;
        img {
          display: block;
          border-radius: 50%;
        }
      }
      h4 {
        display: inline;
        vertical-align: middle;
        margin-right: 8px;
        font-weight: 400;
        margin: 0 10px 0 0;
        font-size: 12px;
        font-size: 0.75rem;
        line-height: 1.66666667;
      }
      &::after {
        content: " ";
        overflow: hidden;
        clear: both;
        font-size: 0;
        display: block;
      }
      time {
        color: #9b9b9b;
        vertical-align: middle;
        font-size: 12px;
        font-size: 0.75rem;
      }
    }
  }
}
.user-card.block h4 {
  display: block;
  margin-right: 0;
}
summary {
  display: list-item;
  color: #4a4a4a;
  line-height: 1.625;
  margin: 0;
  &::after {
    content: " ";
    overflow: hidden;
    clear: both;
    font-size: 0;
    display: block;
  }
}
.column-content-side {
  float: left;
  width: 300px;
  min-height: 500px;
  .author-card {
    background-color: #fff;
    border: 1px solid #dbe2e8;
    box-shadow: 0 1px 2px rgba(46, 61, 73, 0.08);
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    margin-bottom: 20px;
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 9px;
      img {
        display: block;
        border-radius: 50%;
      }
    }
    hr {
      margin: 20px 0;
      width: 100%;
      height: 1px;
      background-color: #dbe2e8;
      border: none;
    }
    .desc {
      width: 100%;
      display: flex;
      flex-direction: row;
      font-size: 14px;
      font-size: 0.875rem;
      color: #9b9b9b;
      .desc-info {
        width: 50%;
        text-align: center;
      }
      p {
        flex: 0 0 50%;
        text-align: center;
        margin-bottom: 25px;
      }
    }
    button {
      background: #1c8ce9;
      font-size: 12px;
      color: #fff;
      height: 24px;
      border: none;
    }
    .about-btn {
      margin-top: 20px;
      height: 78px;
      width: 32px;
      margin: 10px 0px 0px;
      padding: 7px 24px;
      border: 1px solid #292525;
      border-radius: 32px;
      &:hover {
        color: #fff;
        background: #000;
      }
    }
  }
}
</style>
