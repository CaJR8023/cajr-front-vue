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
        <a href=""><img src="../assets/cajrLogo.png" width="60px" height="60px"/></a>
      </div>
      <div class="cajr-header-nav">
        <router-link
          v-for="item in navlist"
          :key="item.title"
          :to="{ name: item.name }"
          >{{ item.title }}</router-link
        >
        <router-link :to="{ name: 'Zhuanlan' }">专栏</router-link>
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
        <ElButton type="primary"  icon="el-icon-search"  v-show="!hiddenBtn" v-model="selectValue" circle></ElButton>
          <ElButton type="primary" icon="el-icon-user" v-show="!hiddenBtn" v-model="selectValue" circle></ElButton>
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
        <a href=""><img src="../assets/cajrLogo.png" width="60px" height="60px"/></a>
      </div>
      <div class="cajr-header-hide-writer">
        <el-button type="primary" size="mini" @click="writerArticle"
          >写文章</el-button
        >
      </div>
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
      isActive: true
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
    writerArticle() {}
  },
  components: {}
};
</script>

<style lang="less">
.cajr-home-header {
  height: 60px;
  width: 100%;
  overflow: hidden;
  z-index: 99999;
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
      button:hover{
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
      button:hover{
        background-color: #000;
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
</style>
