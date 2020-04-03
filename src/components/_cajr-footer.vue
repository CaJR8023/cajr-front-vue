<template>
  <el-footer class="cajr-footer" style="  height: 100%;">
    <div class="inner">
      <div class="share">
        <a href="javascript:;"><img src="../assets/QQ.png"/></a>
        <a href="javascript:;"><img src="../assets/github.png"/></a>
        <a href="javascript:;"><img src="../assets/wechat.png"/></a>
        <a href="javascript:;"><img src="../assets/weibo.png"/></a>
        <a href="javascript:;"><img src="../assets/zhihu.png"/></a>
      </div>
      <ul class="link">
        <li><a href="javascript:;">支持我</a></li>
        <li><a href="javascript:;">作者招募</a></li>
        <li><a href="javascript:;">用户协议</a></li>
        <li><a href="javascript:;">FAQ</a></li>
        <li>
          <a href="javascript:;" @click="aboutMeDialogVisible = true"
            >Contact Us</a
          >
        </li>
      </ul>
      <div class="copyright">
        <p>仲恺农业工程学院 ｜ 2016届毕业作品 ｜ 1206303099@qq.com</p>
        <p>© 2019.12-2020.4 by CAJR</p>
        <p></p>
      </div>
    </div>

    <el-dialog
      title="关于我们"
      :visible.sync="aboutMeDialogVisible"
      width="320px"
      top="25vh"
      center
    >
      <span>github: https://github.com/CaJR8023</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="aboutMeDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </el-footer>
</template>

<script>
export default {
  data() {
    return {
      aboutMeDialogVisible: false
    };
  }
};
</script>

<style lang="less" scoped>
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.cajr-footer {
  background-color: #fff;
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .inner {
    max-width: 1110px;
    margin: 0 auto;
    .share {
      margin: 0 auto 60px;
      text-align: center;
      a {
        display: inline-block;
        height: 36px;
        width: 36px;
        margin: 0 15px;
        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          background-size: contain;
        }
      }
    }
    .link {
      font-size: 0.875rem;
      margin: 20px auto;
      text-align: center;
      padding: 0;
      li {
        list-style: none;
        display: inline-block;
        margin: 0 40px;
        a {
          &:hover {
            color: red;
          }
        }
      }
    }
    .copyright {
      font-size: 0.75rem;
      color: #999;
      text-align: center;
      display: block;
      margin: 20px auto 0;
      p {
        line-height: 1.4;
      }
    }
  }
}
</style>
