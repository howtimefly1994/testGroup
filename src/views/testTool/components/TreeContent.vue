<template>
  <div class="contentbox">
    <!-- <div class="information" v-if="!url" style="margin:20px 0 20px 0">请点击对应模块的菜单</div> -->
    <!-- <div style="margin:20px 0 20px 0">当前：{{relevant}}</div> -->
    <span style="margin:20px 0 20px 0">当前：{{relevant}}</span>
    <span class="information" v-if="!url" style="margin:20px 0 20px 0;color:red">请选择二级菜单</span>
    <hr />
    <div class="content">
      <div class="search" v-if="relevant!='企业相关'||url">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="IP" prop="ip">
            <el-input v-model="form.ip"></el-input>
          </el-form-item>
          <el-form-item label="port" prop="port">
            <el-input v-model="form.port"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" plain @click="submitForm('form')">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    relevant: {
      type: String,
      default: ""
    }
  },
  name: "TreeContent",
  data() {
    return {
      url: "",
      form: {
        api: "",
        port: ""
      },
      rules: {
        ip: [{ required: true, message: "请输入ip", trigger: "blur" }],
        port: [{ required: true, message: "请输入port", trigger: "blur" }]
      }
    };
  },
  methods: {
      submitForm(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  },
  watch: {
    relevant(val) {
      if (this.relevant == "企业基本信息") {
        this.url = "1";
      } else if (this.relevant == "企业股东") {
        this.url = "2";
      } else if (this.relevant == "人员相关") {
        this.url = "3";
      } else if (this.relevant == "项目相关") {
        this.url = "4";
      } else if (this.relevant == "资质相关") {
        this.url = "5";
      } else {
        this.url = "";
      }
    }
  },
  created() {
    // this.judgeUrl();
  }
};
</script>
<style>
.contentbox {
  position: relative;
}
.content {
  position: absolute;
  height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../../assets/fengjing.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
}
.search {
  height: 550px;
  width: 550px;
  border-radius: 10px;
  background-color: #fffefe;
  padding: 10px;
  background-image: url("../../../assets/fengjing.jpg");
  box-shadow: 10px 10px 5px rgb(124, 119, 119);
}
.el-form-item__label {
  background-color: #52a4f5;
}
.el-button--primary.is-plain {
  width: 100%;
}
</style>