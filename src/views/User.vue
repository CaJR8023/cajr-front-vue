<template>
  <div style="height:100%;">
    <cajr-header ref="header" />
    <div class="user-page">
      <div class="user-content">
        <div class="user-info-box">
          <div class="portrait">
            <div class="cajr-portrait" style="height: 100px;">
              <img
                :src="avatar"
                style="width: 100px; height: 100px; border-radius: 100px;"
              />
            </div>
          </div>
          <div class="cont">
            <div class="name">{{ userInfo.username }}</div>
            <div
              class="summary"
              v-if="userInfo.signature != null && userInfo.signature != ''"
            >
              {{ userInfo.signature }}
            </div>
            <div class="summary" v-else>还没有介绍自己</div>
          </div>
          <div class="follow-box">
            <a href="javascript:;"
              >关注
              <span class="count">{{ userInfo.followNum }}</span>
            </a>
            <a href="javascript:;"
              >粉丝
              <span class="count">{{ userInfo.followedNum }}</span>
            </a>
          </div>
          <div class="button-box">
            <div class="btn-box">
              <el-button
                type="button"
                v-if="isMyself"
                @click="editBtn"
                class="cajr-default cajr-small"
                size="mini"
                style="background: #fff;"
                round
                >编辑</el-button
              >
              <el-button
                type="button"
                v-else
                @click="followBtn"
                class="cajr-default cajr-small"
                size="mini"
                style="background: #fff;"
                round
                >{{ followInfo }}</el-button
              >
            </div>
          </div>
        </div>
        <div class="user-tabs-box">
          <div class="cajr-user-nav text-align-center">
            <router-link
              style="margin-right: 40px"
              v-for="item in navlist"
              :key="item.title"
              :to="{ name: item.name }"
              >{{ item.title }}
            </router-link>
          </div>
        </div>
        <div class="user-tabs-box-container" style="width: 800px; ">
          <router-view :userId="userId"></router-view>
        </div>
      </div>
    </div>
    <cajr-footer style="width:100%; height:247px; display: flex;" />
  </div>
</template>

<script>
import cajrHeader from "./../components/_cajr-header";
import cajrFooter from "./../components/_cajr-footer";
import Router from "./../routes/router";
import Serve from "../global/request";

export default {
  data() {
    return {
      navlist: [],
      Data: [],
      followUserData: [],
      index: 1,
      isMyself: false,
      isLogin: false,
      userInfo: "",
      avatar: "",
      followInfo: "",
      userId: 0,
      isFollow: 0
    };
  },
  created() {
    this.userId = this.$route.params.id;
    this.loginStatus();
    this.getUserData();
    this.render();
    this.navlist = Router[2].children;
    this.followStatus();
  },
  methods: {
    getUserData() {
      Serve._getUserInfo(this.$route.params.id).then(res => {
        this.userInfo = res.data;
        this.isFollow = res.data.isFollow;
        this.avatar = this.$store.getters.ossImgUrl + this.userInfo.avatar;
      });
    },
    loginStatus() {
      if (localStorage.getItem("isLogin") == "true") {
        this.isLogin = true;
        // this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        // this.avatar = this.$store.getters.ossImgUrl + this.userInfo.avatar;
        // eslint-disable-next-line no-unused-vars
        let userId = this.$route.params.id;
        // eslint-disable-next-line no-cond-assign
        this.isMyself = (userId = localStorage.getItem("userId"))
          ? true
          : false;
      } else {
        this.isLogin = false;
      }
    },
    followStatus() {
      if (this.isFollow === 1) {
        this.followInfo = "已关注";
      } else {
        this.followInfo = "关注";
      }
    },
    render() {
      Serve.zhuanlanCard().then(res => {
        this.Data = res.data;
        let data = [];
        for (let i = 0; i < 12; i++) {
          data.push(res.data[i]);
        }
        this.followUserData = data;
      });
    },
    editBtn() {
      this.$router.push({ name: "Setting", params: { userId: 1 } });
    },
    followBtn() {
      if (!this.isLogin) {
        this.$refs.header._isLoginDialogShow();
        // eslint-disable-next-line no-empty
      } else {
      }
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

.cajr-default {
  background: #f5f5f5;
  color: #655e5e;
}
.cajr-small {
  padding: 5px 12px;
}

.user-page {
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding-top: 50px;
  .user-content {
    margin-left: auto;
    margin-right: auto;
    width: 800px;
    .user-info-box {
      padding: 30px;
      width: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      background: #fff;
      min-height: 206px;
      position: relative;
      padding-left: 160px;
      max-width: 800px;
      .portrait {
        position: absolute;
        left: 30px;
        top: 30px;
        .cajr-portrait {
          display: inline-block;
          vertical-align: middle;
          height: auto;
          line-height: normal;
          position: relative;
        }
      }
      .cont {
        padding-bottom: 20px;
        border-bottom: 1px solid #8e8787;
        .name {
          font-weight: 500;
          font-size: 24px;
          line-height: 34px;
          color: #292525;
          margin-bottom: 11px;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          display: inline-flex;
        }
        .summary {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.05em;
          color: #292525;
          max-width: 390px;
        }
      }
      .follow-box {
        margin-top: 24px;
        a {
          font-size: 14px;
          margin-right: 10px;
          line-height: 20px;
          letter-spacing: 0.1em;
          color: #8e8787;
          .count {
            font-weight: 400;
          }
        }
      }
      .button-box {
        position: absolute;
        right: 30px;
        top: 32px;
        .btn-box {
          display: inline-block;
          vertical-align: middle;
          line-height: normal;
        }
      }
    }
    .user-tabs-box {
      width: 100%;
      max-width: 800px;
      position: relative;
      height: 40px;
      overflow: hidden;
      margin-top: 20px;
      padding-right: 12px;
      .cajr-user-nav {
        flex: 1;
        padding: 5px 14px;
        width: auto;
        a {
          text-decoration: none;
          font-size: 16px;
          color: #666;
          margin: 0 16px;
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
}
</style>
