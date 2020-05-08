<template>
  <div class="setting-profile">
    <div class="header-box">
      <div class="cajr-portrait" style="height: 60px;">
        <img v-if="headImageUrl" :src="headImageUrl" lazy="load" />
        <img v-else :src="OSSUrl + userInfo.avatar" />
      </div>
      <div class="handle-box">
        <div class="btn-box">
          <!-- <el-button size="small" @click="deleteImage" round
            >删除头像</el-button
          >-->
        </div>
        <div class="uploadContaner">
          <div class="btn-box">
            <el-upload
              accept="image/jpeg, image/gif, image/png"
              ref="upload"
              name="file"
              action="http://127.0.0.1:5100/img/avatar/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
            >
              <el-button size="small" round>上传新的头像</el-button>
            </el-upload>
          </div>
        </div>
      </div>
    </div>
    <div class="item-box">
      <div class="label margin-bottom-10">
        <div class="require">用户名</div>
      </div>
      <div class="margin-bottom-20">
        <el-input
          type="text"
          class="form-item"
          placeholder="请输入用户名"
          v-model="userInfoForm.userName"
          size="medium"
        ></el-input>
      </div>
      <div class="label margin-bottom-10">
        <span>职业</span>
      </div>
      <div class="margin-bottom-20">
        <el-input
          type="text"
          class="form-item"
          placeholder="请输入职业"
          v-model="userInfoForm.profession"
          size="medium"
        ></el-input>
      </div>
      <div class="label margin-bottom-10">
        <span>所在地</span>
      </div>
      <div class="margin-bottom-20 select-box">
        <el-cascader
          :options="options"
          v-model="selectedOptions"
          style="display:flex;"
          @change="handleChange"
        ></el-cascader>
      </div>
      <div class="label margin-bottom-10">
        <span>个人签名</span>
      </div>
      <div class="margin-bottom-20">
        <el-input
          type="text"
          :rows="2"
          placeholder="一句话介绍，让他人快速了解"
          v-model="userInfoForm.signature"
          maxlength="100"
        ></el-input>
      </div>
    </div>
    <div class="sub-box">
      <div class="btn-box">
        <el-button @click="submit" round>保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { regionData, CodeToText, TextToCode } from "element-china-area-data";
import Serve from "../global/request";

export default {
  data() {
    return {
      userInfo: "",
      headImageUrl: "",
      nickName: "",
      job: "",
      bio: "",
      options: regionData,
      selectedOptions: [],
      OSSUrl: "",
      userInfoForm: {
        avatar: "",
        userName: "",
        profession: "",
        location: "",
        signature: "",
        userId: ""
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.userInfoForm.userName = localStorage.getItem("user_name");
      this.userInfoForm.avatar = this.userInfo.avatar;
      this.userInfoForm.profession = this.userInfo.profession;
      this.userInfoForm.location = this.userInfo.location;
      this.userInfoForm.signature = this.userInfo.signature;
      this.userInfoForm.userId = this.userInfo.userId;
      this.OSSUrl = this.$store.getters.ossImgUrl;

      let locationArray = this.userInfo.location.split("-");
      switch (locationArray.length) {
        case 1:
          this.selectedOptions.push(TextToCode[locationArray[0]].code);
          break;
        case 2:
          this.selectedOptions.push(TextToCode[locationArray[0]].code);
          this.selectedOptions.push(
            TextToCode[locationArray[0]][locationArray[1]].code
          );
          break;
        case 3:
          this.selectedOptions.push(TextToCode[locationArray[0]].code);
          this.selectedOptions.push(
            TextToCode[locationArray[0]][locationArray[1]].code
          );
          this.selectedOptions.push(
            TextToCode[locationArray[0]][locationArray[1]][locationArray[2]]
              .code
          );
          break;
        case 0:
          break;
      }
    },
    // eslint-disable-next-line no-unused-vars
    handleAvatarSuccess(res, file, fileList) {
      this.userInfoForm.avatar = "/" + res.url;
      this.headImageUrl = this.$store.getters.ossImgUrl + "/" + res.url;
    },
    beforeAvatarUpload(avatarFile) {
      const isLt2M = avatarFile.size / 1024 / 1024 < 3;
      if (isLt2M) {
        this.$message.error("上传的图片大小不能超过 3MB ！");
      }
      return isLt2M;
    },
    deleteImage() {
      this.headImageUrl = "";
    },
    handleChange(value) {
      let location = "";
      for (let i = 0; i < value.length; i++) {
        if (i == value.length - 1) {
          location += CodeToText[value[i]];
        } else {
          location += CodeToText[value[i]] + "-";
        }
      }
      this.userInfoForm.location = location;
      console.info(location);
    },
    submit() {
      console.info(this.userInfoForm);
      Serve.userInfo(this.userInfoForm).then(res => {
        if (res.data === 1) {
          this.$message.success("保存成功");
        } else {
          this.$message.error("保存失败");
        }
      });
    }
  }
};
</script>

<style lang="less">
.margin-bottom-10 {
  margin-bottom: 10px;
}
.margin-bottom-20 {
  margin-bottom: 20px;
}
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.select-box {
  text-align: left;
  width: 100%;
}

input.el-input__inner {
  background: #f5f5f5;
  color: #292525;
  border: 1px solid transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  font-size: 14px;
  height: 60px;
  line-height: 14px;
  padding: 23px 15px 23px 14px;
}

.setting-profile {
  width: 100%;
  max-width: 548px;
  margin: 0 auto;
  .header-box {
    padding: 16px;
    background: #fff;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    .cajr-portrait {
      display: inline-block;
      vertical-align: middle;
      height: auto;
      line-height: normal;
      position: relative;
      img {
        height: 60px;
        width: 60px;
        border-radius: 60px;
      }
    }
    .handle-box {
      display: flex;
      .btn-box {
        margin-left: 8px;
        button {
          border: 0px;
          background: #f5f5f5;
          &:hover {
            background: #fff;
          }
        }
      }
      .uploadContaner {
        button {
          border: 0px;
          color: red;
          background: #f5f5f5;
          &:hover {
            background: red;
            color: #fff;
          }
        }
      }
    }
  }
  .item-box {
    margin-top: 12px;
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
    .form-item {
      margin-bottom: 10px;
    }
    .select-box {
      .select {
        .el-input {
          width: 100px;
        }
      }
    }
  }
  .sub-box {
    text-align: center;
    margin-top: 40px;
    .btn-box {
      display: inline-block;
      vertical-align: middle;
      line-height: normal;
      button {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 110px;
        color: red;
        border: 0px;
        &:hover {
          color: #fff;
          background: red;
        }
      }
    }
  }
}
</style>
