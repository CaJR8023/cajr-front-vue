<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
#app {
  height: 100%;
}
</style>
