<template>
  <div class="cajr-specials-page">
    <el-container>
      <el-main class="cajr-specials-main">
        <div class="cajr-main-tabs">
          <router-link :to="{ name: 'Home' }">推荐</router-link>
          <router-link :to="{ name: 'Specials' }">热榜</router-link>
        </div>
        <div class="cajr-specials-hotlist">
          <el-button
            v-for="item in specialsbtnlist"
            :key="item.name"
            :data-name="item.identifier"
            @click="childNavBtn"
            round
            >{{ item.name }}</el-button
          >
        </div>
        <cajr-loading v-show="loading" />
        <div class="cajr-main-list">
          <div
            class="cajr-articles-item"
            v-for="(item, index) in specialsData"
            :key="index"
          >
            <div class="cajr-articles-container">
              <div class="cajr-articles-content">
                <div class="cajr-hot-number">{{ index + 1 }}</div>
                <h3 class="cajr-articles-title">{{ item.target.title }}</h3>
                <div class="cajr-articles-hot">{{ item.detail_text }}</div>
              </div>
              <div
                class="cajr-articles-cover"
                v-for="i in item.children"
                :key="i.id"
              >
                <img :src="i.thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Serve from "./../global/request";
import loading from "../components/_cajr-loading";
export default {
  data() {
    return {
      specialsbtnlist: [],
      specialsData: [],
      loading: true
    };
  },
  created() {
    this.render();
  },
  methods: {
    render() {
      Serve.hostlist().then(res => {
        this.specialsbtnlist = res.data;
      });
      let params = "total";
      Serve.hostLists(params).then(res => {
        this.specialsData = res.data;
        this.loading = false;
      });
    },
    childNavBtn(e) {
      let params = e.currentTarget.dataset.name;
      Serve.hostLists(params).then(res => {
        this.specialsData = res.data;
      });
    }
  },
  components: {
    "cajr-loading": loading
  }
};
</script>

<style lang="less">
.cajr-specials-page {
  .cajr-specials-main {
    background-color: #fff;
    margin-right: 14px;
    padding: 0;
    .cajr-main-tabs {
      position: relative;
      height: 60px;
      line-height: 60px;
      padding-left: 20px;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 1px;
        background-color: #eee;
      }
      a {
        color: #666;
        text-decoration: none;
        padding: 0 16px;
        &.router-link-exact-active {
          color: #000;
        }
      }
    }
    .cajr-specials-hotlist {
      position: relative;
      line-height: 60px;
      padding: 0 20px;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        height: 1px;
        width: 100%;
        background-color: #eee;
      }
      button {
        height: 30px;
        padding: 0 18px;
        line-height: 30px;
      }
    }
    .cajr-main-list {
      .cajr-articles-item {
        padding: 20px 40px;
        border-bottom: 1px solid #eee;
        .cajr-articles-title {
          margin-bottom: 14px;
        }
        .cajr-articles-hot {
          position: absolute;
          bottom: 0;
          color: #999;
          font-size: 14px;
          &::before {
            display: inline-block;
            content: "";
            background: url("#") no-repeat;
            background-size: 100%;
            height: 18px;
            width: 18px;
            vertical-align: text-top;
            margin-right: 5px;
          }
        }
        .cajr-articles-container {
          display: flex;
          .cajr-articles-cover {
            float: right;
            margin-right: 14px;
            img {
              height: 105px;
              width: 190px;
              background-color: #eee;
              border-radius: 10px;
            }
          }
          .cajr-articles-content {
            position: relative;
            flex: 1;
            padding: 0 14px;

            .cajr-hot-number {
              position: absolute;
              left: -16px;
              top: -2px;
              font-size: 22px;
              font-weight: 600;
              color: red;
            }
            .articles-content {
              max-height: 105px;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
  .cajr-specials-asider {
    background-color: #fff;
    padding: 20px;
    .cajr-asider-userInfo {
      margin: 0 auto;
      width: 80%;
      .cajr-userInfo-img {
        text-align: center;
        img {
          width: 80px;
          height: 80px;
          padding: 20px;
        }
      }
      .cajr-userInfo-name {
        font-size: 28px;
        font-weight: 600;
      }
    }
  }
}
</style>
