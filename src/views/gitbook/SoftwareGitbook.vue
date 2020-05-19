<template>
  <div>
    <iframe :src="gitbookUrl" scrolling="auto" frameborder="0" id="bdIframe"></iframe>
  </div>
</template>
<script>
export default {
  name: "SoftwareGitbook",
  data() {
    return {
      gitbookUrl: "http://192.168.169.226:4000/"
    };
  },
  methods: {
    getGitbook() {
      // this.$axios.get('http://192.168.169.32:4000/').then(function(res){
      // console.log(res);
      // })

    }
  },
  created() {
    this.getGitbook();
  },
  mounted() {
    const oIframe = document.getElementById("bdIframe");
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = Number(deviceWidth) - 220 + "px"; //数字是页面布局宽度差值
    oIframe.style.height = Number(deviceHeight) - 120 + "px"; //数字是页面布局高度差
  }
};
</script>