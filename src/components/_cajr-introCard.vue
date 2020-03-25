<template>
  <div class="cajr-zhuanti-list">
    <div class="cajr-zhuanti-item" v-for="item in datas" :key="item.title">
      <img class="cajr-zhuanti-item-img" :src="item.banner" alt />
      <div class="cajr-zhuanti-item-content">
        <div
          style="height:80px;border-bottom:1px solid #eee;padding-bottom:20px"
        >
          <h3 class="cajr-zhuanti-item-title">{{ item.title }}</h3>
          <div class="cajr-zhuanti-item-intro">{{ item.introduction }}</div>
        </div>
        <div class="cajr-zhuanti-item-relevant">
          <Tag
            :title="i.section_title"
            v-for="i in item.section_list"
            :key="i.section_title"
            style="margin:0 5px 5px 0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "../components/_cajr-tag";
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
  components: {
    Tag
  }
};
</script>

<style lang="less">
.cajr-zhuanti-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .cajr-zhuanti-item {
    background-color: #fff;
    width: 48%;
    margin-bottom: 20px;
    transition: all 0.4s;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    overflow: hidden;
    &:hover {
      -webkit-box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
    }
    .cajr-zhuanti-item-img {
      display: block;
      width: 100%;
      height: 120px;
    }
    .cajr-zhuanti-item-content {
      padding: 10px;
      .cajr-zhuanti-item-title {
        font-size: 20px;
        font-weight: 600;
      }
      .cajr-zhuanti-item-intro {
        color: #999;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .cajr-zhuanti-item-relevant {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
      }
    }
  }
}
</style>
