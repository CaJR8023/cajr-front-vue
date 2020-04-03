<template>
  <div class="editor">
    <div ref="toolbar" class="toolbar" style="z-index:0;"></div>
    <div ref="editor" class="textInput"></div>
  </div>
</template>

<script>
import E from "wangeditor";
import API from "../global/api";
export default {
  name: "Editorbar",
  data() {
    return {
      editor: null,
      info_: null
    };
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    isClear: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isClear(val) {
      // 触发清除文本域内容
      if (val) {
        this.editor.txt.clear();
        this.info_ = null;
      }
    },
    value(val) {
      // 使用 v-model 时，设置初始值
      this.editor.txt.html(val);
    }
  },
  mounted() {
    this.seteditor();
  },
  methods: {
    seteditor() {
      this.editor = new E(this.$refs.toolbar, this.$refs.editor);
      // this.editor.customConfig.uploadImgShowBase64 = true; // base 64 存储图片
      this.editor.customConfig.uploadImgServer = API.uploadEditorImg; // 配置服务器端地址
      this.editor.customConfig.uploadImgHeaders = { userId: 2 }; // 自定义 header
      this.editor.customConfig.uploadFileName = "file"; // 后端接受上传文件的参数名
      this.editor.customConfig.uploadImgMaxSize = 5 * 1024 * 1024; // 将图片大小限制为 5M
      this.editor.customConfig.uploadImgMaxLength = 6; // 限制一次最多上传 6 张图片
      this.editor.customConfig.uploadImgTimeout = 3 * 60 * 1000; // 设置超时时间
      this.editor.customConfig.showLinkImg = true;
      this.editor.customConfig.withCredentials = true;
      // 配置菜单

      this.editor.customConfig.uploadImgHooks = {
        // eslint-disable-next-line no-unused-vars
        fail: (xhr, editor, result) => {
          // 插入图片失败回调
          this.$message.error("fail");
        },
        // eslint-disable-next-line no-unused-vars
        success: (xhr, editor, result) => {
          // 图片上传成功回调
          // this.$message.success("图片上传成功");
        },
        // eslint-disable-next-line no-unused-vars
        timeout: (xhr, editor) => {
          // 网络超时的回调
        },
        // eslint-disable-next-line no-unused-vars
        error: (xhr, editor) => {
          // 图片上传错误的回调
          this.$message.error("fail");
        },
        customInsert: (insertImg, result, editor) => {
          // 图片上传成功，插入图片的回调
          this.$message.success("图片上传成功");
          console.log(insertImg);
          console.log(result);

          // var res = JSON.parseJSON(result);
          var sourceLink = API.aliyunOss + result.url; //获取上传成功后的文件的Url

          // 插入图片到editor
          editor.cmd.do(
            "insertHtml",
            '<img src="' + sourceLink + '" style="max-width:100%;"/>'
          );
        }
      };
      this.editor.customConfig.onchange = html => {
        this.info_ = html; // 绑定当前逐渐地值
        this.$emit("change", this.info_); // 将内容同步到父组件中
      };
      // 创建富文本编辑器
      this.editor.create();
    }
  }
};
</script>

<style lang="less">
.editor {
  width: 100%;
  margin: 0 auto;
  border: 0.5px solid #ccc;
}
.toolbar {
  border: 0.5px solid #ccc;
}
.textInput {
  border: 0px solid #ccc;
  height: 430px;
}
.-w-e-text {
  padding: 10px;
  overflow-y: scroll;
}
.w-e-toolbar {
  margin-top: -1px;
}
.w-e-menu {
  z-index: 2 !important;
}
.w-e-text-container {
  z-index: 1 !important;
}
</style>
