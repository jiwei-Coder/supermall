<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         :key="index"
         class="tab-control-item"
         @click="itemClick(index)"
         :class="{active:currentIndex==index}">
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return ['流行', '新款', '精选']
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex=index
        this.$emit("clickItem",index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    line-height: 40px;
    height: 40px;
    font-size: 15px;
    background-color: #fff;
    position: sticky;
    top:44px;
    z-index: 10;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .tab-control .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
