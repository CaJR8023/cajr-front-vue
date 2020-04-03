<template>
  <div class="article-rec-list">
    <div class="article-rec-item" v-for="item in datas" :key="item.title">
      <img class="article-rec-item-img" :src="item.banner" alt />
      <div class="article-rec-item-content">
        <div>
          <h3 class="article-rec-item-title">{{ item.title }}</h3>
          <div class="article-rec-item-intro">
            <a href="javascript:;" target="_blank">
              <div class="pic_box">
                <img src="../assets/github.png" />
                <span class="name">
                  <span class="text_ellipsis">CAJR</span>
                </span>
              </div>
            </a>
            <div class="right">
              <div class="pic_box">
                <i class="el-icon-view" style="font-size:18px;"></i>
                <span class="name" style="margin-left: 4px;">{{
                  item.view_count
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less">
.text_ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.article-rec-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .article-rec-item {
    background-color: #fff;
    width: 264px;
    height: 260px;
    margin-bottom: 10px;
    transition: all 0.4s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    overflow: hidden;
    &:hover {
      -webkit-box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
    }
    .article-rec-item-img {
      display: block;
      width: 100%;
      height: 143px;
    }
    .pic_box {
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: #8e8787;
    }
    .article-rec-item-content {
      padding: 15px;
      .article-rec-item-title {
        height: 45px;
        margin-bottom: 9px;
        font-size: 17px;
        line-height: 1.4;
        color: #292525;
        font-weight: 600;
      }
      .article-rec-item-intro {
        color: #999;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        .pic_box {
          img {
            cursor: pointer;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .name {
            display: flex;
            max-width: 90px;
            color: #8e8787;
          }
        }
        .right {
          display: flex;
          margin-left: 80px;
        }
      }
    }
    .pic-box {
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: #8e8787;
    }
  }
}
</style>
