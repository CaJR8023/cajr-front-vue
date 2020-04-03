<template>
  <div class="cajr-article-editor-page" style>
    <cajr-header></cajr-header>
    <div class="article-writing-main">
      <div class="view">
        <!-- <img src="../assets/editor.png" /> -->
        <h1>文章投稿</h1>
        <form class="form-wrap">
          <div class="form-item">
            <div class="label">文章封面</div>
            <div class="banner-box">
              <el-upload
                action="http://127.0.0.1:5100/img/news/upload"
                ref="upload"
                drag
                accept="image/jpeg, image/gif, image/png"
                list-type="picture"
                :on-error="uploadFailMsg"
                :on-success="uploadSuccessMsg"
                :on-exceed="handleExceed"
                :before-upload="beforeBannerUpload"
                :auto-upload="false"
                :on-preview="handlePictureCardPreview"
                :limit="1"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将图片拖到此处，或
                  <em style="color:red;">点击上传</em>
                </div>
                <div class="el-upload__tip" slot="tip">
                  只能上传jpg/png/gift文件，且不超过5MB
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
            </div>
          </div>

          <div class="form-item">
            <div class="label">
              文章标题
              <em>*</em>
            </div>
            <div class="textarea-wrap text">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="articleTitle"
              ></el-input>
            </div>
          </div>

          <div class="item-article-container">
            <div class="label">
              文章内容
              <em>*</em>
            </div>
            <div class="textarea-wrap text">
              <cajr-editor
                :isClear="isClear"
                @change="changeArticle($event)"
              ></cajr-editor>
            </div>
          </div>
          <div class="form-item">
            <div class="label">文章标签</div>
            <div class="textarea-wrap text">
              <el-tag
                :key="tag"
                v-for="tag in articleTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
                >{{ tag }}</el-tag
              >
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
                style="width: 90px; margin-left: 10px; padding:1px;"
              ></el-input>
              <el-button
                v-else
                class="button-new-tag"
                size="small"
                @click="showInput"
                style="height:32px; margin-left: 10px; vertical-align: bottom;"
                >+添加标签</el-button
              >
            </div>
          </div>
          <div class="form-submit">
            <el-button class="save-btn" round>保存</el-button>
            <el-button class="release-btn" round>发布</el-button>
          </div>
        </form>
      </div>
    </div>
    <cajr-footer></cajr-footer>
  </div>
</template>

<script>
import cajrHeader from "./../components/_cajr-header";
import cajrFooter from "./../components/_cajr-footer";
import Editor from "../components/_cajr-editor";
export default {
  data() {
    return {
      articleTitle: "",
      dialogImageUrl: "",
      dialogVisible: false,
      articleTags: [],
      inputVisible: false,
      inputValue: "",
      isClear: false
    };
  },
  methods: {
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.articleTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    handleClose(tag) {
      this.articleTags.splice(this.articleTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      // eslint-disable-next-line no-unused-vars
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    beforeBannerUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 5;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
        return false;
      }
      return isLt2M;
    },
    handlePictureCardPreview(file) {
      console.info(file.url);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed() {
      this.$message({
        message: "只能上传一张图片",
        type: "warning"
      });
    },
    // eslint-disable-next-line no-unused-vars
    uploadFailMsg(err, file, fileList) {
      this.$message.error("图片上传失败");
    },
    // eslint-disable-next-line no-unused-vars
    uploadSuccessMsg(response, file, fileList) {
      this.$message.success("图片上传成功");
    },
    uploadFile() {
      this.$refs.upload.submit();
      /*
      let formData = new FormData()
      formData.append('file', this.form.file)
      axios.post('https://jsonplaceholder.typicode.com/posts/', 
        formData,
        { "Content-Type": "multipart/form-data" }
      )
      .then(res => {
        console.log('res')
        console.log(res)
      })
      .catch(err => {

      })
      */
    },
    changeArticle(html) {
      console.log(html);
    }
  },
  components: {
    "cajr-header": cajrHeader,
    "cajr-footer": cajrFooter,
    "cajr-editor": Editor
  }
};
</script>

<style lang="less">
.el-tag + .el-tag {
  margin-left: 10px;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.el-textarea {
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
}
.textarea-wrap {
  position: relative;
}
.cajr-article-editor-page {
  width: 100%;
  background: #fff;
  .article-writing-main {
    margin-left: auto;
    margin-right: auto;
    width: 800px;
    padding-top: 40px;
    .view {
      h1 {
        margin: 1em 0;
        font-size: 24px;
        font-size: 1.5rem;
        font-family: -apple-system, BlinkMacSystemFont, PingFang SC,
          Hiragino Sans GB, Microsoft YaHei, \\5fae\8f6f\96c5\9ed1,
          helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, Arial,
          sans-serif;
        text-align: center;
      }
      .form-wrap {
        margin: 50px 0;
        .form-item {
          margin-bottom: 46px;
          .label {
            display: block;
            font-size: 16px;
            font-size: 1rem;
            line-height: 1.375;
            margin-bottom: 17px;
            font-weight: 500;
            color: #292525;
            em {
              color: #d7191a;
              margin-left: 4px;
              font-style: normal;
            }
          }
          textarea {
            resize: none;
          }
          .el-textarea__inner {
            resize: vertical;
            line-height: 1.6;
            padding: 20px;
            resize: none;
            font-size: 14px;
            font-size: 0.875rem;
          }
          .banner-box {
            text-align: center;
            .banner-upload {
              max-width: 800px;
            }
          }
        }
        .item-article-container {
          margin-bottom: 46px;
          .label {
            display: block;
            font-size: 16px;
            font-size: 1rem;
            line-height: 1.375;
            margin-bottom: 17px;
            font-weight: 500;
            color: #292525;
            em {
              color: #d7191a;
              margin-left: 4px;
              font-style: normal;
            }
          }
        }
        .form-submit {
          text-align: center;
          margin-top: 30px;
          button {
            width: 202px;
            height: 52px;
            background: #292525;
            color: #fff;
            &:hover {
              background: #fff;
              color: #000;
            }
          }
          .save-btn {
            border: 1px solid transparent;
            background: #eee;
            color: #000;
          }
          .release-btn {
            color: red;
            background: #fff;
            &:hover {
              background: #d7191a;
              color: #fff;
              border: 0px;
            }
          }
        }
      }
    }
    img {
      max-width: 100%;
    }
  }
}
img {
  border-style: none;
}
</style>
