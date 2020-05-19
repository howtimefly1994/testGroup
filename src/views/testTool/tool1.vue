<template>
  <div>
    <el-row :gutter="24">
      <el-col :span="5">
        <div class="treeBox">
          <div class="treeWarp">
            <el-tree :data="data"  :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
        </div>
      </el-col>
      <el-col :span="19">
        <div class="treeBox">
          <div class="treeContent">
            <tree-content :relevant="relevant"></tree-content>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import treeContent from "./components/TreeContent";
export default {
  name: "tool1",
  components: {
    treeContent
  },
  data() {
    return {
      relevant:"",//相关,传到子组件
      data: [
        {
          label: "企业相关",
          children: [
            {
              label: "企业基本信息"
            },
            {
              label: "企业股东"
            }
          ]
        },
        {
          label: "人员相关"
        },
        {
          label: "项目相关"
        },
        {
          label: "资质相关"
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      // console.log(data.label);
      this.relevant=data.label;
    }
  }
};
</script>
<style>
.treeBox {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.treeWarp,
.treeContent {
  height: 89vh;
  padding: 10px;
  background-color: #fff;
}

.el-tree-node__content {
  height: 45px !important;
}
</style>