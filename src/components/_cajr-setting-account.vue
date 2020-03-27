<template>
  <div class="setting-account">
    <div class="item-box">
      <div class="label margin-bottom-10">
        <div class="margin-bottom-10">认证手机号</div>
      </div>
      <div class="authPhone-box">
        <span class="text">15112022009 (已认证)</span>
        <div class="btn-box">
          <el-button size="small" @click="phoneDialogVisible = true" round
            >修改</el-button
          >
        </div>
      </div>
    </div>
    <div class="item-box">
      <div class="label margin-bottom-10">
        <div class="pwd-update-box">
          <span class="text require">修改登录密码</span>
          <div class="btn-box">
            <el-button size="small" @click="phoneDialogVisible = true" round
              >修改</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      class="verifyPhone-dialog"
      :visible.sync="phoneDialogVisible"
      width="400px"
      top="25vh"
      center
    >
      <div class="text">为了您的帐号安全，确认身份成功后进行下一步操作</div>
      <div class="form">
        <el-input v-model="telInput" placeholder="手机号" class="phone-input">
          <el-select v-model="phoneHeaderValue" slot="prepend">
            <!-- <el-option
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
                > -->
          </el-select>
        </el-input>
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
      </div>
      <div class="text1" style="color:#7f7f7f;">
        手机不在身边 / 验证身份遇到其他问题？ 请联系 1206303099@qq.com
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="phoneDialogVisible = false"
          >确 定</el-button
        >
        <el-button type="primary" @click="phoneDialogVisible = false"
          >取 消</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneDialogVisible: false,
      verificationCodeTitle: "获取验证码",
      codeShow: true,
      timer: null,
      count: "",
      codeInput: "",
      telInput: "",
      phoneHeaderValue: "+86"
    };
  },
  methods: {
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
  }
};
</script>

<style lang="less">
.margin-bottom-10 {
  margin-bottom: 10px;
}

.setting-account {
  min-height: 440px;
  .item-box {
    padding: 24px 20px;
    background: #fff;
    text-align: center;
    margin-bottom: 12px;
    .label {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: #292525;
      text-align: left;
      .require {
        &::after {
          content: "*";
          color: #fd281a;
          margin-left: 4px;
        }
      }
    }
    .authPhone-box {
      background: linear-gradient(0deg, #f4f4f4, #f4f4f4);
      height: 60px;
      padding: 0 12px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
    .pwd-update-box {
      background: #fff;
      height: 60px;
      padding: 0 12px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  }
  .verifyPhone-dialog {
    .text {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: #8e8787;
      margin-bottom: 20px;
      text-align: left;
    }
    .text1 {
      font-size: 10px;
      line-height: 14px;
      text-align: center;
      letter-spacing: 0.1em;
      color: #8e8787;
      margin-top: 30px;
    }
    .form {
      .phone-input {
        margin-bottom: 30px;
        line-height: normal;
        display: inline-table;
        width: 100%;
        height: 55px;
        border-collapse: separate;
        border-spacing: 0;
        .el-input-group__prepend {
          background-color: #f5f5f5;
          border: 1px solid transparent;
          width: 30%;
          text-align: center;
        }
      }
      .code-input {
        .el-input-group__append {
          background-color: #f5f5f5;
          border: 1px solid transparent;
          width: 30%;
          text-align: center;
        }
      }
    }
  }
}
</style>
