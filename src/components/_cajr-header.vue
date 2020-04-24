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
        <a href>
          <img src="../assets/cajrLogo.png" width="60px" height="60px" />
        </a>
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
          v-if="!isLogin"
          v-show="!hiddenBtn"
          @click="loginDialogShow"
          circle
        ></ElButton>
        <el-dropdown v-else v-show="!hiddenBtn">
          <a href>
            <el-avatar :size="32" style="margin-left:8px" :src="avatarUrl" />
          </a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a @click="user(userInfo.userId)">个人中心</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a @click="goMyAttention(userInfo.userId)">我的关注</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a @click="goMyReview(userInfo.userId)">我的评论</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a @click="loginOut">退出登陆</a>
            </el-dropdown-item>
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
        <a href>
          <img src="../assets/cajrLogo.png" width="60px" height="60px" />
        </a>
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
        top="8vh"
        width="400px"
      >
        <div slot="title">
          <div class="text-align-right">
            <el-button
              class="close-btn"
              @click="close"
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
            <div v-if="isPassword">
              <el-form
                ref="passwordLoginForm"
                :rules="passwordLoginRules"
                :model="passwordLoginForm"
              >
                <el-form-item prop="username">
                  <el-input
                    v-model="passwordLoginForm.username"
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
                        <span
                          style="float: left; color: #8492a6; font-size: 12px"
                          >({{ item.phoneHeaderValue }})</span
                        >
                      </el-option>
                    </el-select>
                  </el-input>
                </el-form-item>

                <el-form-item prop="password" v-if="isPassword">
                  <el-input
                    class="l-password-input"
                    placeholder="密码"
                    v-model="passwordLoginForm.password"
                    show-password
                  ></el-input>
                </el-form-item>
              </el-form>
            </div>

            <!-- 验证码登录 -->
            <div v-else>
              <el-form
                ref="smsLoginForm"
                :rules="smsLoginRules"
                :model="smsLoginForm"
              >
                <el-form-item prop="mobile">
                  <el-input
                    v-model="smsLoginForm.mobile"
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
                        <span
                          style="float: left; color: #8492a6; font-size: 12px"
                          >({{ item.phoneHeaderValue }})</span
                        >
                      </el-option>
                    </el-select>
                  </el-input>
                </el-form-item>

                <el-form-item prop="inputCode">
                  <el-input
                    class="code-input"
                    placeholder="输入验证码"
                    v-model="smsLoginForm.inputCode"
                  >
                    <el-button
                      type="text"
                      slot="append"
                      @click="sendCodeLogin"
                      v-if="lCodeShow"
                      >{{ lVerificationCodeTitle }}</el-button
                    >
                    <el-button
                      type="text"
                      slot="append"
                      v-else
                      style="margin-right: 10px; text-align:center;"
                      disabled
                      >{{ loginCount }}s</el-button
                    >
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
          </div>

          <!-- 注册弹窗 -->
          <el-form ref="userForm" :rules="userRules" :model="userForm">
            <div class="form-box" v-show="!isLoginDialogShow">
              <el-form-item prop="tel">
                <el-input
                  v-model="userForm.tel"
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
                      >
                    </el-option>
                  </el-select>
                </el-input>
              </el-form-item>

              <el-form-item prop="username">
                <el-input
                  class="name-input"
                  placeholder="昵称"
                  v-model="userForm.username"
                ></el-input>
              </el-form-item>

              <el-form-item prop="password">
                <el-input
                  class="r-password-input"
                  placeholder="密码"
                  v-model="userForm.password"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item prop="rePassword">
                <el-input
                  class="re-password-input"
                  placeholder="再次输入密码"
                  v-model="userForm.rePassword"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item prop="regCode">
                <el-input
                  class="code-input"
                  placeholder="输入验证码"
                  v-model="userForm.regCode"
                >
                  <el-button
                    type="text"
                    slot="append"
                    @click="sendCodeReg"
                    v-if="rCodeShow"
                    >{{ RVerificationCodeTitle }}</el-button
                  >
                  <el-button
                    type="text"
                    slot="append"
                    v-else
                    style="margin-right: 10px"
                    disabled
                    >{{ regCount }}s</el-button
                  >
                </el-input>
              </el-form-item>
              <el-checkbox v-model="checked" style="margin-bottom: 20px;">
                我已经阅读并同意《
                <a href="javascript:;">用户协议</a>》
              </el-checkbox>
            </div>
          </el-form>

          <el-row v-show="isLoginDialogShow">
            <el-col style="padding-top: 7px; width:50%;">
              <a href="javascript:;" @click="isPasswordLogin" v-if="!isPassword"
                >密码登录</a
              >
              <a href="javascript:;" @click="isPassword = false" v-else
                >验证码登录</a
              >
            </el-col>
            <el-col style="text-align: right; width:50%; padding-top: 1px;">
              <el-button
                size="mini"
                class="register-btn"
                @click="isLoginDialogShow = false"
                round
                >注 册</el-button
              >
              <el-button
                size="mini"
                class="login-btn"
                style="color:red; "
                @click="login"
                round
                >登 陆</el-button
              >
            </el-col>
          </el-row>

          <!-- 注册按钮 -->
          <el-row v-show="!isLoginDialogShow">
            <el-col style="padding-top: 7px; width:50%;">
              <a href="javascript:;" @click="isLoginDialogShow = true" class
                >返回登陆</a
              >
            </el-col>
            <el-col style="text-align: right; width:50%; padding-top: 1px;">
              <el-button
                size="mini"
                class="login-btn"
                style="color:red; "
                @click="register"
                round
                >注 册</el-button
              >
            </el-col>
          </el-row>
        </div>
        <div class="msgLine">
          <el-divider></el-divider>
        </div>
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
            <a href="javascript:;">
              <img src="../assets/wechat.png" />
            </a>
            <a href="javascript:;">
              <img src="../assets/github.png" />
            </a>
            <a href="javascript:;">
              <img src="../assets/QQ.png" />
            </a>
            <a href="javascript:;">
              <img src="../assets/weibo.png" />
            </a>
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
import Router from "./../routes/router";
import Common from "./../global/common";
import Serve from "@/global/request";

export default {
  inject: ["reload"],
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
      passwordLoginForm: {
        username: "",
        password: "",
        grant_type: "password"
      },
      smsLoginForm: {
        inputCode: "",
        mobile: ""
      },
      passwordLoginRules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      smsLoginRules: {
        inputCode: [
          { required: true, message: "请输入验证码", trigger: "blur" }
        ],
        mobile: [{ required: true, message: "请输入手机号", trigger: "blur" }]
      },
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
      timer: null,
      regCount: "",
      loginCount: "",
      lCodeShow: true,
      rCodeShow: true,
      lVerificationCodeTitle: "发送验证码",
      RVerificationCodeTitle: "发送验证码",
      checked: true,
      isPassword: false,
      avatarUrl: Common.ossDefaultAvatar,
      userForm: {
        username: "",
        tel: "",
        password: "",
        rePassword: "",
        regCode: ""
      },
      userRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        tel: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        rePassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" }
        ]
      },
      userInfo: {}
    };
  },
  created() {
    this.render();
    this.isLoginStatus();
    this.navlist = Router[0].children;
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
  },
  methods: {
    render() {
      Serve.select().then(res => {
        let selectData = res.top_search.words;
        this.selectData = selectData;
        let index = Math.floor(Math.random() * selectData.length);
        this.placeholder = selectData[index].display_query;
        this.selectData = this.loadAll();
      });
    },
    isLoginStatus() {
      if (localStorage.getItem("isLogin") == "true") {
        this.isLogin = true;
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(this.userInfo);
        this.avatarUrl = this.$store.getters.ossImgUrl + this.userInfo.avatar;
      } else {
        this.isLogin = false;
      }
    },
    cajrSelect() {
      this.hiddenBtn = !this.hiddenBtn;
    },
    querySearch(queryString, cb) {
      const selectData = this.selectData;
      const results = queryString
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
      this.isActive = document.documentElement.scrollTop < 52;
    },
    _isLoginDialogShow() {
      this.isDialogShow = true;
      this.isActive = true;
    },
    writerArticle() {
      if (this.isLogin) {
        this.$message.success("你已经登录");
        this.$router.push({ path: "/editor" });
      } else {
        // eslint-disable-next-line no-undef
        this.isDialogShow = true;
        this.isActive = true;
      }
    },
    query() {
      this.$router.push({ path: "/search" });
    },
    user(id) {
      console.log(id);
      this.$router.push({ path: `/u/${id}` });
    },
    goMyAttention(userId) {
      this.$router.push({ path: `/u/${userId}/follow` });
    },
    goMyReview(userId) {
      this.$router.push({ path: `/u/${userId}/review` });
    },
    sendCodeLogin() {
      if (this.smsLoginForm.mobile == "") {
        this.$message.warning("请输入手机号");
      } else {
        if (
          this.smsLoginForm.mobile.length > 11 ||
          this.smsLoginForm.mobile.length < 11
        ) {
          this.$message.warning("请输入正确的手机号");
          return false;
        }

        this.sendCode(this.smsLoginForm.mobile);
      }
    },
    sendCode(data) {
      Serve.sendCode(data).then(res => {
        if (res.data === 1) {
          this.$message.success("发送成功");
          this.countDownLogin();
        } else {
          this.$message.error("发送验证码失败");
        }
      });
    },
    countDownLogin() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.loginCount = TIME_COUNT;
        this.lCodeShow = false;
        this.timer = setInterval(() => {
          if (this.loginCount > 0 && this.loginCount <= TIME_COUNT) {
            this.loginCount--;
          } else {
            this.lCodeShow = true;
            clearInterval(this.timer);
            this.timer = null;
            this.lVerificationCodeTitle = "重新发送";
          }
        }, 1000);
      }
    },
    sendCodeReg() {
      if (this.userForm.tel == "") {
        this.$message.warning("请输入手机号");
      } else {
        if (this.userForm.tel.length > 11 || this.userForm.tel.length < 11) {
          this.$message.warning("请输入正确的手机号");
          return false;
        }
        this.sendCode(this.userForm.tel);
      }
    },
    countDownReg() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.regCount = TIME_COUNT;
        this.rCodeShow = false;
        this.timer = setInterval(() => {
          if (this.regCount > 0 && this.regCount <= TIME_COUNT) {
            this.regCount--;
          } else {
            this.rCodeShow = true;
            clearInterval(this.timer);
            this.timer = null;
            this.rVerificationCodeTitle = "重新发送";
          }
        }, 1000);
      }
    },

    close() {
      this.isDialogShow = false;
      this.isLoginDialogShow = true;
      this.isActive = document.documentElement.scrollTop < 52;
    },
    loginDialogShow() {
      this.isDialogShow = true;
      this.isLoginDialogShow = true;
    },
    login() {
      let form = "smsLoginForm";
      if (this.isPassword) {
        form = "passwordLoginForm";
      }
      this.$refs[form].validate(valid => {
        if (valid) {
          console.info("success");
          if (this.isPassword) {
            this._passwordLogin();
          } else {
            this._smsLogin();
          }
        } else {
          console.info("fail");
          return;
        }
      });
    },
    _passwordLogin() {
      this.$store
        .dispatch("user/_passwordLogin", this.passwordLoginForm)
        // eslint-disable-next-line no-unused-vars
        .then(async res => {
          this.$message.success("登录成功!");
          const isGetUserInfo = await this._getUserInfo(
            this.passwordLoginForm.username
          );
          if (isGetUserInfo) {
            this.isDialogShow = false;
            this.isLogin = true;
            this.$router.go(0);
          }
        })
        .catch(error => {
          console.info(error);
          this.$message.error("手机号或密码错误");
        });
    },
    _smsLogin() {
      this.$store
        .dispatch("user/_smsLogin", this.smsLoginForm)
        // eslint-disable-next-line no-unused-vars
        .then(res => {
          this.$message.success("登录成功!");
          this.isDialogShow = false;
          this.isLogin = true;
          this.$router.go(0);
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          this.$message.error("验证码错误");
        });
    },
    isPasswordLogin() {
      this.isPassword = true;
    },
    loginOut() {
      this.$message.success("你已安全退出!");
      this.$store.dispatch("user/loginOut");
      this.$router.go(0);
      this.isLogin = false;
    },
    _getUserInfo(data) {
      return Serve.getUserInfo(data)
        .then(res => {
          console.info(res.data);
          localStorage.setItem("userId", res.data.id);
          localStorage.setItem("userName", res.data.id);
          localStorage.setItem("isLogin", true);
          return true;
        })
        .catch(error => {
          console.info(error);
        });
    },
    verifyCode() {
      // this.sendCodeReg();
      if (this.userForm.regCode == "") {
        this.$message.warning("验证码不能为空");
        return false;
      }
      if (
        this.userForm.regCode.length > 4 ||
        this.userForm.regCode.length < 4
      ) {
        this.$message.warning("验证码为4位数字");
        return false;
      }
      return (
        Serve.veridyCode(this.userForm)
          .then(res => {
            if (res.data == 1) {
              this.$message.success("验证码校验成功");
              return true;
            } else {
              this.$message.warning("验证码错误，请重新发送验证码");
              return false;
            }
          })
          // eslint-disable-next-line no-unused-vars
          .catch(error => {
            this.$message.error("注册失败");
          })
      );
    },
    async register() {
      this.$refs["userForm"].validate(async valid => {
        if (valid) {
          if (this.userForm.password != this.userForm.rePassword) {
            this.$message.warning("两次输入的密码不一致");
            return;
          }
          const verifyCodeIsSuccess = await this.verifyCode();
          console.info("verifyCodeIsSuccess =>" + verifyCodeIsSuccess);
          if (verifyCodeIsSuccess) {
            const data = await this._register();
            if (data) {
              this.smsLoginForm.mobile = this.userForm.tel;
              this.smsLoginForm.inputCode = this.userForm.regCode;
              this._smsLogin();
            }
          }
        } else {
          return;
        }
      });
    },
    _register() {
      return Serve.register(this.userForm).then(res => {
        if (res.data == 1) {
          return true;
        }
        this.$message.warning(res.msg);
        return false;
      });
    }
  },
  components: {}
};
</script>

<style lang="less">
.form-box .el-form-item {
  margin-bottom: 15px !important;
}
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
  z-index: 200;
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
      .phone-input {
        margin-bottom: 20px;
        line-height: normal;
        display: inline-table;
        width: 100%;
        height: 55px;
        border-collapse: separate;
        border-spacing: 0;
        .el-input-group__prepend {
          width: 30%;
          background-color: #f5f5f5;
          border: 1px solid transparent;
          text-align: center;
        }
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
        .el-input-group__append {
          width: 30%;
          background-color: #f5f5f5;
          border: 1px solid transparent;
          text-align: center;
        }
        input {
          height: 55px;
        }
      }
    }
  }
  .msgLine {
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
