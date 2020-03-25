<template>
  <el-aside class="cajr-asider" width="300px">
    <!-- <div class="cajr-asider-userInfo">
      <div class="cajr-userInfo-img">
        <a href="https://github.com/ragnar-document">
          <img src="@/assets/cajrLogo.png" alt />
        </a>
      </div>
      <div class="cajr-userInfo-name">CAJR</div>
      <div class="cajr-userInfo-github"></div>
      <div class="cajr-24hour-intro">
        <br />
      </div>
    </div> -->
    <div class="cajr-asider-zhuanlan">
      <img src="../assets/zhuanlan.jpg" class="zhuanlanImage" />
      <div style="padding: 16px 20px 20px; margin:0;" class="aboutInfo">
        <span class="title">专栏推荐</span>
        <p class="info">
          发布重要应用的大版本更新的相关内容。以聚合的形式，为关注 App
          动态的人提供一个获取资讯的场所。
        </p>
        <div class="infoFooter">
          <span class="num">100人关注</span>
          <div class="action">
            <el-button size="mini" round>进入</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="cajr-asider-24hour">
      <div class="cajr-24hour-title">24小时热闻</div>
      <div class="block">
        <el-carousel
          height="150px"
          :interval="5000"
          indicator-position="outside"
        >
          <el-carousel-item v-for="item in projectData" :key="item.id">
            <a :href="item.url">
              <div class="cajr-24hour-list">
                <div class="cajr-24hour-item">
                  <div class="cajr-24hour-item-img">
                    <img src="../assets/test.jpg" />
                    <span class="cajr-24hour-item-name">{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="cajr-asider-tag">
      <div class="cajr-tag-title">热门标签</div>
      <div class="cajr-tag-details">
        <el-button
          style="margin-top:5px;"
          round
          v-for="item in hotTagData"
          :key="item.name"
          >#{{ item.name }}</el-button
        >
      </div>
    </div>
    <div class="cajr-asider-about">
      <img src="../assets/about.png" class="aboutImage" />
      <div style="padding: 14px;" class="aboutInfo">
        <span>关于我们</span>
        <br />
        <span class="info"
          >毕业设计作品，不作商用<br />
          github: https://github.com/CaJR8023
        </span>
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
          id: 1,
          name: "OPPO Find X2 Pro 深度影像评测",
          intro: "贫穷限制了我的想象，美国的有钱人如何防范新冠病毒？",
          inn: "Node.js/vue.js/小程序/elementUI",
          url: "../assets/test.jpg"
        },
        {
          id: 2,
          name: "OPPO Find X2 Pro 深度影像评测",
          intro: "后台增删改项目",
          inn: "node.js/koa/vue.js/ElementUI",
          url: "../assets/about.png"
        },
        {
          id: 3,
          name: "OPPO Find X2 Pro 深度影像评测",
          intro: "类似于todolist的小程序",
          inn: "node.js/koa/小程序",
          url: "../assets/about.png"
        },
        {
          id: 4,
          name: "OPPO Find X2 Pro 深度影像评测",
          intro: "一个某课卖99的简单小程序",
          inn: "小程序",
          url: "../assets/about.png"
        },
        {
          id: 5,
          name: "OPPO Find X2 Pro 深度影像评测",
          intro: "一个某课卖99的简单小程序",
          inn: "小程序",
          url: "../assets/about.png"
        }
      ],
      hotTagData: [
        {
          name: "OPPO Find X2 Pro",
          url: "https://go.sspai.com/matrix"
        },
        {
          name: "肺炎",
          url: "https://go.sspai.com/matrix"
        },
        {
          name: "学医",
          url: "https://go.sspai.com/matrix"
        },
        {
          name: "椭圆机",
          url: "https://go.sspai.com/matrix"
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="less">
.cajr-asider {
  background-color: #fafbfc;
  margin-top: 20px;
  height: 100%;
  .cajr-asider-zhuanlan {
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    .zhuanlanImage {
      display: block;
      width: 100%;
    }
    .aboutInfo {
      .title {
        font-size: 18px;
        font-size: 1.125rem;
        line-height: 1.22222222;
        padding-bottom: 5px;
        font-weight: 400;
      }
      p {
        margin-top: 5px;
        font-size: 14px;
        font-size: 0.875rem;
        line-height: 1.57142857;
        color: #9b9b9b;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      .infoFooter {
        margin-top: 23px;
        color: #9b9b9b;
        font-size: 12px;
        font-size: 0.75rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .num {
          font-size: 12px;
          font-size: 0.75rem;
          float: left;
        }
        .action {
          float: right;
          margin-bottom: 5px;
          font-size: 0.75rem;
          button {
            &:hover {
              color: #fff;
              background: #000;
            }
          }
        }
      }
    }
  }
  .cajr-asider-userInfo {
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    .cajr-userInfo-img {
      text-align: center;
      position: relative;
      img {
        width: 80px;
        height: 80px;
        padding: 20px;
        animation: spin 3s ease infinite;
      }
      &::before {
        position: absolute;
        display: inline-block;
        content: "";
        bottom: 16px;
        right: 60px;
        height: 16px;
        width: 16px;
        background-size: 100%;
      }
    }
    .cajr-userInfo-name {
      font-size: 28px;
      font-weight: 600;
      text-align: center;
    }
  }
  .cajr-asider-24hour {
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    padding: 20px 10px;
    .cajr-24hour-title {
      font-size: 18px;
      font-weight: 600;
    }
    .cajr-24hour-list {
      margin-top: 10px;
      .cajr-24hour-item {
        .cajr-24hour-item-img {
          img {
            display: block;
            width: 100%;
            transition: all 0.4s;
          }
          img:hover {
            -webkit-box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
            box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.3);
          }
          .cajr-24hour-item-name {
            color: #fff;
            font-size: 14px;
            font-weight: 400;
            position: absolute;
            top: 115px;
            left: 10px;
          }
        }
        .cajr-24hour-item-intro {
          font-size: 12px;
          color: #888;
        }
        .cajr-24hour-item-inn {
          color: #666;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }

  .cajr-asider-tag {
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 20px auto 0;
    border-bottom: 1px solid #eee;
    padding: 30px 10px;
    .cajr-tag-title {
      font-size: 18px;
      font-weight: 600;
    }
    .cajr-tag-details {
      margin-top: 20px;
      display: flex;
      justify-content: start;
      align-items: center;
      flex-wrap: wrap;
      .cajr-tag-list {
        margin-right: 10px;
      }
    }
  }
  .cajr-asider-about {
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    margin-top: 20px;
    .aboutImage {
      display: block;
      width: 100%;
    }
    .aboutInfo {
      margin: 0;
      padding: 16px 20px 20px;
      .info {
        color: #9b9b9b;
        vertical-align: middle;
        font-size: 12px;
        font-size: 0.75rem;
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
