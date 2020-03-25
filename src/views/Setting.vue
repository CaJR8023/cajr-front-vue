<template>
  <div style="width:100%">
    <cajr-header />
    <div class="cajr-setting-container">
      <div class="setting">
        <div class="setting-header">
          <div class="title ">账号设置</div>
          <div class="line"></div>
        </div>
        <div class="swiper-container">
          <div class="tags-box">
            <div class="tags-nav text-align-center">
              <router-link
                style="margin-right: 40px"
                v-for="item in navlist"
                :key="item.title"
                :to="{ name: item.name }"
                >{{ item.title }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="setting-container">
          <router-view />
        </div>
      </div>
    </div>
    <cajr-footer />
  </div>
</template>

<script>
import cajrHeader from "./../components/_cajr-header";
import cajrFooter from "./../components/_cajr-footer";
import Router from "./../routes/router";

export default {
  data() {
    return {
      userId: 0,
      navlist: []
    };
  },
  created() {
    this.getUserId();
    this.navlist = Router[3].children;
  },
  methods: {
    getUserId() {
      this.userId = this.$route.params.userId;
      console.info(this.userId);
    }
  },
  components: {
    "cajr-header": cajrHeader,
    "cajr-footer": cajrFooter
  }
};
</script>

<style lang="less" scoped>
.text-align-center {
  text-align: center;
}
.cajr-setting-container {
  .setting {
    width: 100%;
    max-width: 548px;
    margin: 0 auto;
    .setting-header {
      .title {
        font-size: 32px;
        line-height: 45px;
        letter-spacing: 0.1em;
        padding: 50px 0 20px;
        color: #292525;
      }
      .line {
        height: 1px;
        background: #e5e5e5;
        margin-bottom: 20px;
      }
    }
    .swiper-container {
      .tags-box {
        width: 100%;
        max-width: 800px;
        position: relative;
        height: 40px;
        overflow: hidden;
        margin-top: 20px;
        padding-right: 12px;
        .tags-nav {
          flex: 1;
          padding: 5px 14px;
          width: auto;
          a {
            text-decoration: none;
            font-size: 16px;
            color: #666;
            padding-bottom: 5px;
            &:hover {
              color: #d71a1b;
            }
            &.router-link-exact-active {
              color: #d71a1b;
              border-bottom: 2px solid #d71a1b;
            }
          }
        }
      }
    }
    .setting-container {
      margin: 40px auto;
    }
  }
}
</style>
