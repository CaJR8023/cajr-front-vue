<template>
  <div class="column-container">
    <cajr-header></cajr-header>
    <div class="colum-main">
      <div class="colum-view" id="column-detail">
        <div
          class="banner-card"
          style="background-image: url('http://127.0.0.1:900/img/zhuanlan.36dbde22.jpg')"
        >
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
        <div class="column-view-container">
          <cajr-column-content></cajr-column-content>
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
import columnContent from "./../components/_cajr-column-content";

export default {
  data() {
    return {};
  },
  components: {
    "cajr-header": cajrHeader,
    "cajr-footer": cajrFooter,
    "cajr-column-content": columnContent
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
#column-detail .container {
  width: 1110px;
  height: 100%;
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>
