<template>
  <div>
    <cajr-header ref="header" />
    <el-container class="cajr-main">
      <div style="padding-top:20px;width:100%">
        <!-- Main content -->
        <router-view @isLoginDialogShow="isLoginDialogShow"></router-view>
      </div>
      <cajr-asider />
    </el-container>
    <el-backtop :bottom="80"></el-backtop>
    <cajr-footer />
  </div>
</template>

<script>
import cajrHeader from "./_cajr-header";
import cajrAsider from "./_cajr-asider";
import cajrFooter from "./_cajr-footer";
export default {
  data() {
    return {};
  },
  methods: {
    isLoginDialogShow(data) {
      if (data) {
        this.$refs.header._isLoginDialogShow();
      }
    }
  },
  components: {
    "cajr-header": cajrHeader,
    "cajr-asider": cajrAsider,
    "cajr-footer": cajrFooter
  }
};
</script>

<style>
.cajr-main {
  width: 1100px;
  margin: 0 auto;
  padding-bottom: 20px;
}
</style>
