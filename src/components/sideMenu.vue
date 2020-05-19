<template>
  <div>
    <div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#001529"
        text-color="rgba(255,255,255,0.7)"
        active-text-color="#fff"
        router
      >
        <!-- <el-menu-item index="/index">
          <i class="el-icon-document"></i>
          <span slot="title">其他模块</span>
        </el-menu-item> -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-notebook-2"></i>
            <span>gitbook</span>
          </template>
          <el-menu-item index="/proGitbook">测试部资源材料</el-menu-item>
          <el-menu-item index="/SoftwareGitbook">测试部学习文档</el-menu-item>
          <el-menu-item index="/project">项目相关</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-cooperation"></i>
            <span>测试小工具</span>
          </template>
          <el-menu-item index="/tool1">政务服务小工具</el-menu-item>
          <el-menu-item index="/tool2">工具二</el-menu-item>
        </el-submenu>
        <!-- <el-menu-item index="/markdown">
          <i class="el-icon-s-order"></i>
          <span slot="title">Markdown</span>
        </el-menu-item>-->
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: "sideMenu"
};
</script>
<style >
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 95vh;
}
.el-menu {
  border-right-width: 0px;
}
.is-active {
  background-color: #2d8cf0 !important;
}
</style>