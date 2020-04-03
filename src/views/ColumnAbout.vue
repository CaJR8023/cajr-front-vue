<template>
  <div class="column-container" style="background: #fff;">
    <cajr-header></cajr-header>
    <div class="colum-main">
      <div class="colum-view" id="column-detail">
        <div class="banner-card" style="background-image: url('#')">
          <div class="mask"></div>
          <div class="inner">
            <h3>CAJR Column</h3>
            <p>
              回顾 App 进入你生活的时光，你在这个 App 遇见了什么人？哪个 App
              陪你度过一段或孤独、或痛苦、或欢愉的时光？那个 App
              为什么会成为你生活中不可或缺的一部分？说出你的故事……
            </p>
            <div>
              <div style="font-size:12px;">618 人关注</div>
              <el-button round>关注专栏</el-button>
            </div>
          </div>
        </div>
        <div class="wapper info">
          <section>
            <h3 class="caption">简介</h3>
            <p>
              回顾 App 进入你生活的时光，你在这个 App 遇见了什么人？哪个 App
              陪你度过一段或孤独、或痛苦、或欢愉的时光？那个 App
              为什么会成为你生活中不可或缺的一部分？说出你的故事……
            </p>
          </section>
          <section>
            <h3 class="caption">专栏主编</h3>
            <div class="user-card block">
              <a href="/user/705956" class="avatar">
                <img
                  alt="OscarLiu"
                  src="https://cdn.sspai.com/attachment/origin/2017/02/04/366325.JPG?imageMogr2/quality/95/thumbnail/!100x100r/gravity/Center/crop/100x100"
                  lazy="loaded"
                  style="width: 50px; height: 50px;"
                />
              </a>
              <h4>
                <a href="/user/705956" class>OscarLiu</a>
              </h4>
              <time>117 篇文章</time>
            </div>
          </section>
          <h4>专栏作者（20人）</h4>
          <div class="user-list">
            <div class="user-card block">
              <a href="/user/933272" class="avatar">
                <img
                  src="https://cdn.sspai.com/2019/11/04/d9b78909da4f5c79ee6649a970c26d27.jpg?imageMogr2/quality/95/thumbnail/!100x100r/gravity/Center/crop/100x100"
                  lazy="loaded"
                  style="width: 50px; height: 50px;"
                />
              </a>
              <h4>
                <a href="/user/933272" class>阿乐Aleven</a>
              </h4>
              <time>10 篇文章</time>
            </div>
            <div class="user-card block">
              <a href="/user/933272" class="avatar">
                <img
                  src="https://cdn.sspai.com/2019/11/04/d9b78909da4f5c79ee6649a970c26d27.jpg?imageMogr2/quality/95/thumbnail/!100x100r/gravity/Center/crop/100x100"
                  lazy="loaded"
                  style="width: 50px; height: 50px;"
                />
              </a>
              <h4>
                <a href="/user/933272" class>阿乐Aleven</a>
              </h4>
              <time>10 篇文章</time>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear:both;" />
    <cajr-footer></cajr-footer>
    <el-backtop :bottom="80"></el-backtop>
  </div>
</template>

<script>
import cajrHeader from "./../components/_cajr-header";
import cajrFooter from "./../components/_cajr-footer";

export default {
  data() {
    return {
      index: []
    };
  },
  components: {
    "cajr-header": cajrHeader,
    "cajr-footer": cajrFooter
  }
};
</script>

<style lang="less">
.colum-main {
  width: auto;
  height: auto;
  max-width: none;
  .colum-view {
    .banner-card {
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: #fff;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.2);
      background-position: 50%;
      background-size: cover;
      height: 385px;
      overflow: hidden;
      .mask {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .inner {
        max-width: 720px;
        position: relative;
      }
      h3 {
        font-size: 24px;
      }
      p {
        padding: 20px;
      }
      button {
        margin-top: 20px;
        letter-spacing: 2px;
        padding: 8px 17px;
        background-color: transparent;
        color: #fff;
        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
    .column-view-container {
      width: 1110px;
      height: 100%;
      padding-top: 50px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
.user-card {
  .avatar {
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
  }
  img {
    display: block;
    border-radius: 50%;
  }
  h4 {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
    font-weight: 400;
    margin: 0 10px 0 0;
    font-size: 12px;
    font-size: 0.75rem;
    line-height: 1.66666667;
  }
  .block h4 {
    display: block;
    margin-right: 0;
  }
  time {
    color: #9b9b9b;
    vertical-align: middle;
    font-size: 12px;
    font-size: 0.75rem;
  }
}
#column-detail .wapper {
  max-width: 720px;
  padding-top: 45px;
  margin-left: auto;
  margin-right: auto;
}
#column-detail {
  .user-list {
    .user-card {
      float: left;
      width: 33%;
      margin-bottom: 30px;
    }
  }
}
#column-detail .info {
  h3 {
    font-size: 18px;
    font-size: 1.125rem;
    line-height: 1.38888889;
    margin: 0;
    padding-bottom: 27px;
  }
  p {
    margin: 0;
    padding-bottom: 27px;
    color: #4a4a4a;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.5;
  }
}
#column-detail .info > h4 {
  margin: 0;
  padding: 28px 0 29px;
}
</style>
