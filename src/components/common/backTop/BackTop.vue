<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png"  alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    data()
    {
      return{

      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    z-index: 100;
    right: 8px;
    bottom: 50px;
  }
  img{
    width: 43px;
    opacity: 0.7;
  }
</style>
