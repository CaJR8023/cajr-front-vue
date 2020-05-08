<template>
  <div>
    <cajr-header ref="articleHeader"></cajr-header>
    <div class="search-page">
      <div class="search-head">
        <el-input class="search-input" v-model="searchInput">
          <i slot="suffix" class="icon icon-search-black" @click="query"></i>
        </el-input>
        <div class="tabs-box">
          <div class="search-nav text-align-center">
            <router-link
              style="margin-right: 40px"
              v-for="item in navlist"
              :key="item.title"
              :to="{ name: item.name }"
              >{{ item.title }}
            </router-link>
          </div>
        </div>
      </div>
      <router-view :searchInput="searchInput" ref="search"></router-view>
    </div>
    <cajr-footer></cajr-footer>
    <el-backtop :bottom="80"></el-backtop>
  </div>
</template>

<script>
import cajrHeader from "./../components/_cajr-header";
import cajrFooter from "./../components/_cajr-footer";
import Router from "./../routes/router";

export default {
  data() {
    return {
      searchInput: "",
      navlist: []
    };
  },
  created() {
    this.searchInput = this.$route.params.key;
    this.navlist = Router[7].children;
  },
  methods: {
    query() {
      this.$refs.search.search();
      let key = this.searchInput;
      this.$router.push({ path: `/search/${key}` });
    },
    login() {
      this.$refs.articleHeader._isLoginDialogShow();
    }
  },
  components: {
    "cajr-header": cajrHeader,
    "cajr-footer": cajrFooter
  }
};
</script>

<style lang="less">
.search-page {
  .search-head {
    width: 100%;
    height: 180px;
    padding: 40px 10px;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    .search-input {
      width: 100%;
      max-width: 810px;
      left: 50%;
      transform: translateX(-50%);
      .el-input__suffix {
        line-height: 60px;
        right: 20px;
      }
    }
    .tabs-box {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      position: absolute;
      bottom: 0;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      height: 40px;
      overflow: hidden;
      .search-nav {
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
  .search-container {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding-top: 40px;
    min-height: 650px;
    .search-content {
      position: relative;
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      .right {
        position: absolute;
        right: 0;
        top: 0;
        width: 252px;
        .cajr-recommend-tag {
          margin-bottom: 60px;
          .rec-tag-head {
            font-weight: 500;
            font-size: 18px;
            line-height: normal;
            letter-spacing: 0.1em;
            color: #655e5e;
            padding-bottom: 20px;
          }
          .rec-tag-container {
            width: 100%;
            margin: -5px;
            text-align: left;
            .tag-item {
              font-size: 12px;
              background: #fff;
              line-height: normal;
              letter-spacing: 0.05em;
              padding: 5px 10px;
              display: inline-block;
              margin: 5px;
            }
            a {
              text-decoration: none;
              color: #292525;
              -webkit-tap-highlight-color: transparent;
              &:hover {
                color: red;
              }
            }
          }
        }
        .cajr-hot-article {
          .hot-article-head {
            font-weight: 500;
            font-size: 18px;
            line-height: normal;
            letter-spacing: 0.1em;
            color: #655e5e;
            padding-bottom: 20px;
          }
          .hot-article-content {
            .hot-article-content-item {
              width: 100%;
              position: relative;
              padding-left: 42px;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              margin-bottom: 30px;
              .content-item-portrait {
                position: absolute;
                top: 0;
                left: 0;
                line-height: normal;
                display: inline-block;
                vertical-align: middle;
              }
              .content-item-content {
                width: 100%;
                .author-name {
                  font-weight: 400;
                  font-size: 14px;
                  line-height: normal;
                  color: #292525;
                }
                .title {
                  font-weight: 400;
                  font-size: 14px;
                  line-height: normal;
                  letter-spacing: 0.05em;
                  color: #655e5e;
                  margin-top: 10px;
                  width: 100%;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                }
              }
            }
          }
        }
      }
    }
  }
}
.icon {
  width: 24px;
  height: 24px;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  content: " ";
  margin-top: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.icon-search-black {
  background-image: url(../assets/search.png);
  width: 32px;
  height: 32px;
  margin-top: 0;
  cursor: pointer;
}
</style>
