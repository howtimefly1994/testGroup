<template>
  <div>
    <div class="content">
      <div class="card">
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tool2",
  data() {
    return {
         input3: '',
    };
  },
  methods: {}
};
</script>
<style>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(250, 246, 246, 0.8);
  background-image: url('../../assets/fengjing.jpg');
  height: 90vh;
  width: 100%;
}
.card {
  height: 73px;
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 10px 10px 5px rgb(124, 119, 119);
}
</style>