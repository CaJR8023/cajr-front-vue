<template>
  <div class="article-list">
    <div class="article-item" v-for="item in datas" :key="item.title">
      <img
        class="article-item-img"
        :src="item.banner"
        v-if="item.existBanner"
        alt
      />
      <img class="article-item-img" :src="item.banner" v-else alt />
      <div class="article-item-content">
        <div>
          <h3 class="article-item-title">{{ item.title }}</h3>
          <div class="article-item-intro">
            <a href="javascript:;" target="_blank">
              <div class="pic_box">
                <img src="../assets/github.png" />
                <span class="name">
                  <span class="text_ellipsis">{{ item.source }}</span>
                </span>
                <i
                  class="el-icon-view"
                  style="font-size:18px; margin-left: 80px;"
                ></i>
                <span class="name" style="margin-left: 4px;">{{
                  item.visitorCount
                }}</span>
              </div>
            </a>
            <!-- <div class="right">
              <div class="pic_box">
                <i class="el-icon-view" style="font-size:18px;"></i>
                <span class="name" style="margin-left: 4px;">{{
                  item.view_count
                }}</span>
              </div>
            </div> -->
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
.article-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
  &::after {
    content: "";
    width: 30%;
    border: 1px solid transparent;
  }
  margin-left: 10px;
  .article-item {
    background-color: #fff;
    width: 264px;
    height: 260px;
    margin-bottom: 20px;
    transition: all 0.4s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    overflow: hidden;
    &:hover {
      -webkit-box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
    }
    .article-item-img {
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
    .article-item-content {
      padding: 15px;
      .article-item-title {
        height: 45px;
        margin-bottom: 9px;
        font-size: 17px;
        line-height: 1.4;
        color: #292525;
        font-weight: 600;
      }
      .article-item-intro {
        color: #999;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .pic_box {
          img {
            cursor: pointer;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 10px;
          }
          .name {
            max-width: 90px;
            color: #8e8787;
          }
        }
        .right {
          margin-left: 80px;
        }
      }
    }
  }
}
</style>
