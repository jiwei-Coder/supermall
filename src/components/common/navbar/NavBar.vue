<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    box-shadow: 0px 1px 2px rgba(100,100,100,0.1);
    width: 100%;
    /*position: fixed;*/
    /*top: 0;*/
    /*pdding-bottom: 44px;*/
    z-index: 9;
  }
  .left,.right{
    width: 60px;
    /*background: #000;*/
  }
  .center{
    flex: 1;
    text-align: center;
    /*background: red;*/
  }
</style>
