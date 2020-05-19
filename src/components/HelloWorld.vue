<template>
  <div>
    <el-container>
      <el-header style="color:#fff">测试组管理工具</el-header>
      <el-container>
        <el-aside width="200px">
          <side-menu></side-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import sideMenu from "./sideMenu";
export default {
  components: {
    sideMenu
  },
  data() {
    return {
      value1: ""
    };
  },
  methods: {}
};
</script>
<style lang="">
html,
body,
#layout,
.el-container {
  padding: 0;
  margin: 0;
  height: 100%;
}
#iconBox {
  width: 10px;
  height: 20px;
  font-size: 20px;
  position: absolute;
  top: 50%;
  margin-top: -11px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-header,
.el-footer {
  height: 57px !important;
  background-color: #23262E;
  color: #333;
  text-align: center;
  line-height: 76px;
  /* height: 50px !important; */
}

.el-aside {
  background-color: #282b33;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: #f5f7f9;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}
</style>