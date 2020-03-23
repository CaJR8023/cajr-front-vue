<template>
  <el-aside class="cajr-asider-tag" width="300px">
    <div class="cajr-asider-project">
      <div class="cajr-project-title">推荐标签</div>
      <div class="block">
        <el-carousel
          height="100px"
          :interval="5000"
          indicator-position="outside"
        >
          <el-carousel-item v-for="item in projectData" :key="item.name">
            <a :href="item.url">
              <div class="cajr-project-list">
                <div class="cajr-project-item">
                  <div class="cajr-project-item-name">{{ item.name }}</div>
                  <div class="cajr-project-item-intro">{{ item.intro }}</div>
                  <div class="cajr-project-item-inn">{{ item.inn }}</div>
                </div>
              </div>
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      projectData: [
        {
          name: "VE-Admin",
          intro: "舞蹈培训班后台项目",
          inn: "Node.js/vue.js/小程序/elementUI",
          url: "https://github.com/ragnar-document/VE-Admin"
        },
        {
          name: "Koa-Admin",
          intro: "后台增删改项目",
          inn: "node.js/koa/vue.js/ElementUI",
          url: "https://github.com/ragnar-document/OKR-KOA"
        },
        {
          name: "OKR小程序",
          intro: "类似于todolist的小程序",
          inn: "node.js/koa/小程序",
          url: "https://github.com/ragnar-document/OKR-KOA"
        },
        {
          name: "V2EX小程序",
          intro: "一个某课卖99的简单小程序",
          inn: "小程序",
          url: "https://github.com/ragnar-document/Wechat-V2EX"
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="less">
.cajr-asider-tag {
  background-color: #fff;
  margin-top: 10px;
  margin-left: 10px;
  height: 100%;
  padding: 20px 0;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .cajr-asider-project {
    padding: 20px 30px;
    .cajr-project-title {
      padding-bottom: 10px;
      font-size: 18px;
      font-weight: 600;
    }
    .cajr-project-list {
      .cajr-project-item {
        border-right: 2px solid #0084ff;
        border-left: 2px solid #0084ff;
        background-color: aliceblue;
        padding: 10px;
        border-radius: 8px;
        transition: all 0.4s;
        &:hover {
          -webkit-box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
        }
        .cajr-project-item-name {
          color: #0084ff;
          font-size: 20px;
          font-weight: 600;
        }

        .cajr-project-item-intro {
          font-size: 12px;
          color: #888;
        }
        .cajr-project-item-inn {
          color: #666;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}
</style>
