<template>
  <div
    class="cajr-home-header"
    :class="[isActive ? 'cajr-home-header' : 'cajr-home-header isFiexd']"
  >
    <div
      :class="[
        isActive
          ? 'cajr-home-header-container'
          : 'cajr-home-header-container isShow'
      ]"
    >
      <div class="cajr-header-img">
        <a href=""
          ><img src="../assets/cajrLogo.png" width="60px" height="60px"
        /></a>
      </div>
      <div class="cajr-header-nav text-align-center">
        <router-link
          v-for="item in navlist"
          :key="item.title"
          :to="{ name: item.name }"
          style="margin-right: 40px"
          >{{ item.title }}</router-link
        >
        <router-link :to="{ name: 'Zhuanlan' }" style="margin-left: 20px"
          >专栏</router-link
        >
      </div>
      <div class="cajr-header-select">
        <el-autocomplete
          popper-class="my-autocomplete"
          v-model="selectValue"
          :fetch-suggestions="querySearch"
          :placeholder="placeholder"
          @focus="cajrSelect"
          :class="[hiddenBtn ? 'cajr-header-select-input' : '']"
          @blur="cajrSelect"
          @select="handleSelect"
        >
          <i
            class="el-icon-edit el-input__icon"
            slot="suffix"
            @click="handleIconClick"
          ></i>
          <template slot-scope="{ item }">
            <div class="name">{{ item.query }}</div>
            <span class="addr">{{ item.display_query }}</span>
          </template>
        </el-autocomplete>
        <ElButton
          type="primary"
          icon="el-icon-search"
          style="font-size: 18px;"
          v-show="!hiddenBtn"
          @click="query"
          v-model="selectValue"
          circle
        ></ElButton>
        <ElButton
          type="primary"
          icon="el-icon-user"
          style="font-size: 18px;"
          v-show="!hiddenBtn && !isLogin"
          @click="
            isDialogShow = true;
            isLoginDialogShow = true;
          "
          circle
        ></ElButton>
        <el-dropdown v-show="!hiddenBtn && isLogin">
          <a href=""
            ><el-avatar
              :size="32"
              style="margin-left:8px"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          /></a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>我的关注</el-dropdown-item>
            <el-dropdown-item>我的评论</el-dropdown-item>
            <el-dropdown-item>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div
      :class="[
        isActive
          ? 'cajr-home-header-hide-container'
          : 'cajr-home-header-hide-container isShow'
      ]"
    >
      <div class="cajr-header-hide-img">
        <a href=""
          ><img src="../assets/cajrLogo.png" width="60px" height="60px"
        /></a>
      </div>
      <div class="cajr-header-hide-writer">
        <el-button type="primary" size="mini" @click="writerArticle"
          >写文章</el-button
        >
      </div>
    </div>
    <div class="cajr-login-dialog">
      <el-dialog
        :visible.sync="isDialogShow"
        :show-close="false"
        top="10vh"
        width="400px"
      >
        <div slot="title">
          <div class="text-align-right">
            <el-button
              class="close-btn"
              @click="
                isDialogShow = fasle;
                isLoginDialogShow = true;
              "
              icon="el-icon-close"
              circle
            ></el-button>
          </div>
        </div>
        <div class="login-form dialog-form">
          <div class="title">
            <a href="/">
              <img
                src="../assets/cajrLogo.png"
                style="width: 80px; height: 80px;"
              />
            </a>
          </div>
          <div class="form-box" v-show="isLoginDialogShow">
            <el-input
              v-model="telInput"
              placeholder="手机号"
              class="phone-input"
            >
              <el-select v-model="phoneHeaderValue" slot="prepend">
                <el-option
                  v-for="item in phoneHeaderList"
                  :key="item.phoneHeaderValue"
                  :label="item.phoneHeaderValue"
                  :value="item.phoneHeaderValue"
                >
                  <span
                    style="float: left; font-size: 14px; margin-right:2px;"
                    >{{ item.name }}</span
                  >
                  <span style="float: left; color: #8492a6; font-size: 12px"
                    >({{ item.phoneHeaderValue }})</span
                  ></el-option
                >
              </el-select>
            </el-input>
            <el-input
              class="l-password-input"
              placeholder="密码"
              v-model="passwordInput"
              show-password
            ></el-input>
          </div>

          <!-- 注册弹窗 -->
          <div class="form-box" v-show="!isLoginDialogShow">
            <el-input
              v-model="telInput"
              placeholder="手机号"
              class="phone-input"
            >
              <el-select v-model="phoneHeaderValue" slot="prepend">
                <el-option
                  v-for="item in phoneHeaderList"
                  :key="item.phoneHeaderValue"
                  :label="item.phoneHeaderValue"
                  :value="item.phoneHeaderValue"
                >
                  <span
                    style="float: left; font-size: 14px; margin-right:2px;"
                    >{{ item.name }}</span
                  >
                  <span style="float: left; color: #8492a6; font-size: 12px"
                    >({{ item.phoneHeaderValue }})</span
                  ></el-option
                >
              </el-select>
            </el-input>
            <el-input
              class="name-input"
              placeholder="昵称"
              v-model="nameInput"
            ></el-input>
            <el-input
              class="r-password-input"
              placeholder="密码"
              v-model="rPasswordInput"
              show-password
            ></el-input>
            <el-input
              class="re-password-input"
              placeholder="再次输入密码"
              v-model="rePasswordInput"
              show-password
            ></el-input>
            <el-input
              class="code-input"
              placeholder="输入验证码"
              v-model="codeInput"
            >
              <el-button
                type="text"
                slot="append"
                @click="sendCode"
                v-show="codeShow"
                >{{ verificationCodeTitle }}</el-button
              >
              <el-button
                type="text"
                slot="append"
                v-show="!codeShow"
                style="margin-right: 10px"
                disabled
                >{{ count }}s</el-button
              >
            </el-input>
            <el-checkbox v-model="checked" style="margin-bottom: 20px;">
              我已经阅读并同意《<a href="javascript:;">用户协议</a
              >》</el-checkbox
            >
          </div>

          <el-row v-show="isLoginDialogShow">
            <el-col style="padding-top: 7px; width:50%;">
              <a href="javascript:;" class="">忘记密码？</a>
            </el-col>
            <el-col style="text-align: right; width:50%; padding-top: 1px;">
              <el-button
                size="mini"
                class="register-btn"
                @click="isLoginDialogShow = false"
                round
                >注 册</el-button
              >
              <el-button size="mini" class="login-btn" style="color:red; " round
                >登 陆</el-button
              >
            </el-col>
          </el-row>

          <!-- 注册按钮 -->
          <el-row v-show="!isLoginDialogShow">
            <el-col style="padding-top: 7px; width:50%;">
              <a href="javascript:;" @click="isLoginDialogShow = true" class=""
                >返回登陆</a
              >
            </el-col>
            <el-col style="text-align: right; width:50%; padding-top: 1px;">
              <el-button size="mini" class="login-btn" style="color:red; " round
                >注 册</el-button
              >
            </el-col>
          </el-row>
        </div>
        <div class="line"><el-divider></el-divider></div>
        <div
          slot="footer"
          class="login-dialog-footer"
          v-show="isLoginDialogShow"
        >
          <p
            class="text-align-center"
            style="margin-top:0; margin-bottom:10px;"
          >
            其他登陆方式
          </p>
          <div class="other-login">
            <a href="javascript:;"><img src="../assets/wechat.png"/></a>
            <a href="javascript:;"><img src="../assets/github.png"/></a>
            <a href="javascript:;"><img src="../assets/QQ.png"/></a>
            <a href="javascript:;"><img src="../assets/weibo.png"/></a>
          </div>
        </div>

        <!-- 注册footer -->
        <div
          slot="footer"
          class="login-dialog-footer"
          v-show="!isLoginDialogShow"
        >
          <p
            class="text-align-center"
            style="margin-top:0; margin-bottom:10px; color:#9b9b9b;"
          >
            注意：同一个手机号一小时内只能获取 5
            条验证码，如果连续尝试数次都收不到验证码，请联系 1206303099@qq.com
            处理
          </p>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Server from "./../global/request";
import Router from "./../routes/router";
export default {
  data() {
    return {
      hiddenBtn: false,
      selectData: [],
      navlist: [],
      selectValue: "",
      placeholder: "",
      headerHeight: 52,
      scrollHeight: 0,
      isActive: true,
      isDialogShow: false,
      telInput: "",
      passwordInput: "",
      phoneHeaderValue: "+86",
      phoneHeaderList: [
        {
          name: "中国",
          phoneHeaderValue: "+86"
        },
        {
          name: "美国",
          phoneHeaderValue: "+1"
        },
        {
          name: "日本",
          phoneHeaderValue: "+81"
        },
        {
          name: "中国香港",
          phoneHeaderValue: "+852"
        },
        {
          name: "中国台湾",
          phoneHeaderValue: "+886"
        },
        {
          name: "澳大利亚",
          phoneHeaderValue: "+61"
        },
        {
          name: "马来西亚",
          phoneHeaderValue: "+60"
        }
      ],
      isLoginDialogShow: true,
      isLogin: false,
      nameInput: "",
      rPasswordInput: "",
      rePasswordInput: "",
      codeInput: "",
      timer: null,
      count: "",
      codeShow: true,
      verificationCodeTitle: "发送验证码",
      checked: false
    };
  },
  created() {
    this.render();
    this.navlist = Router[0].children;
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  methods: {
    render() {
      Server.select().then(res => {
        let selectData = res.top_search.words;
        this.selectData = selectData;
        let index = Math.floor(Math.random() * selectData.length);
        let placeholder = selectData[index].display_query;
        this.placeholder = placeholder;
        this.selectData = this.loadAll();
      });
    },
    cajrSelect() {
      this.hiddenBtn = this.hiddenBtn ? false : true;
    },
    querySearch(queryString, cb) {
      var selectData = this.selectData;
      var results = queryString
        ? selectData.filter(this.createFilter(queryString))
        : selectData;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return this.selectData;
    },
    handleSelect(item) {
      this.selectValue = item.query;
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    //监听滚动
    getScroll() {
      if (document.documentElement.scrollTop >= 52) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },
    writerArticle() {},
    query() {
      this.isLogin = true;
      this.$router.push({ path: "/cajr/find" });
    },
    sendCode() {
      this.countDown();
    },
    countDown() {
      const TIME_COUNT = 30;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.codeShow = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.codeShow = true;
            clearInterval(this.timer);
            this.timer = null;
            this.verificationCodeTitle = "重新发送";
          }
        }, 1000);
      }
    }
  },
  components: {}
};
</script>

<style lang="less">
.text-align-center {
  text-align: center;
}

.dialog-form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background: #fff;
}
.el-select .el-input {
  width: 88px;
  .text {
    text-align: center;
  }
}
.input-with-select .el-input-group__prepend {
  background-color: rgb(12, 11, 11);
}

.cajr-home-header {
  height: 60px;
  width: 100%;
  overflow: hidden;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  -webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  .cajr-home-header-container {
    display: flex;
    align-items: center;
    height: 60px;
    width: 1100px;
    margin: 0 auto;
    transition: all 0.5s;
    .cajr-header-img .CajrLogo {
      height: 40px;
      width: 64px;
      fill: #000;
    }
    .cajr-header-nav {
      flex: 1;
      padding-left: 40px;
      a {
        text-decoration: none;
        font-size: 16px;
        color: #666;
        margin: 0 16px;
        padding-bottom: 12px;
        &.router-link-exact-active {
          color: #000;
          border-bottom: 3px solid #000;
        }
      }
    }
    .cajr-header-select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 370px;
      .cajr-header-select-input input {
        width: 370px;
        height: 30px;
        background-color: #eee;
        transition: all 0.5s;
      }
      input {
        width: 290px;
        height: 30px;
        background-color: #f6f6f6;
        transition: all 0.5s;
      }
      button {
        height: 30px;
        color: #000;
        width: 60px;
        text-align: center;
        padding: 0;
        margin-left: 10px;
        background-color: #ffffff;
      }
      button:hover {
        background-color: #000;
        color: #ffffff;
      }
    }
  }
  .cajr-home-header-hide-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 52px;
    width: 1100px;
    margin: 0 auto;
    transition: all 0.5s;
    .cajr-header-hide-img .CajrLogo {
      height: 40px;
      width: 64px;
      fill: #000;
    }
    .cajr-header-hide-writer {
      button {
        background-color: #000;
      }
      button:hover {
        background-color: #fff;
        color: #000;
      }
    }
  }
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
    .hot {
      border-bottom: #b4b4b4;
      line-height: 40px;
    }
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
.isShow {
  width: 100%;
  transform: translateY(-100%);
}
.isFiexd {
  position: fixed;
  width: 100%;
}
.cajr-login-dialog {
  .el-dialog__body {
    padding: 0px 20px 0px;
  }
  .text-align-right {
    text-align: right;
    .close-btn {
      border: none;
      color: #000;
      background: #fff;
      i {
        &::before {
          width: 20px;
          height: 20px;
        }
      }
      &:hover {
        color: red;
      }
    }
  }
  .login-form {
    .title {
      text-align: center;
      img {
        margin: 0 auto;
        background-size: 100%;
        background-repeat: no-repeat;
      }
    }
    .form-box {
      .el-input-group__append {
        width: 30%;
        text-align: center;
      }
      .phone-input {
        margin-bottom: 20px;
        line-height: normal;
        display: inline-table;
        width: 100%;
        height: 55px;
        border-collapse: separate;
        border-spacing: 0;
        input {
          height: 55px;
        }
      }
      .l-password-input {
        margin-bottom: 40px;
        line-height: normal;
        display: inline-table;
        width: 100%;
        height: 55px;
        border-collapse: separate;
        border-spacing: 0;
        input {
          height: 55px;
        }
      }
      .name-input {
        margin-bottom: 20px;
        line-height: normal;
        display: inline-table;
        width: 100%;
        height: 55px;
        border-collapse: separate;
        border-spacing: 0;
        input {
          height: 55px;
        }
      }
      .r-password-input {
        margin-bottom: 20px;
        line-height: normal;
        display: inline-table;
        width: 100%;
        height: 55px;
        border-collapse: separate;
        border-spacing: 0;
        input {
          height: 55px;
        }
      }
      .re-password-input {
        margin-bottom: 20px;
        line-height: normal;
        display: inline-table;
        width: 100%;
        height: 55px;
        border-collapse: separate;
        border-spacing: 0;
        input {
          height: 55px;
        }
      }
      .code-input {
        margin-bottom: 20px;
        line-height: normal;
        display: inline-table;
        width: 100%;
        height: 55px;
        border-collapse: separate;
        border-spacing: 0;
        input {
          height: 55px;
        }
      }
    }
  }
  .line {
    margin: 0 auto;
    height: 1px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .other-login {
    padding: 10px 20px 30px;
    text-align: center;
    img {
      width: 40px;
      height: 40px;
      margin-left: 10px;
    }
  }
}
</style>
