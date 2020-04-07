<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <cart-list :cart-list="cartList"/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  import { mapGetters } from "vuex"

  export default {
    name: "Cart",
    components: {
    	NavBar,
      CartList,
      CartBottomBar
    },
    data(){
      return{
      }
    },
    computed:{
      ...mapGetters(["cartList","cartLength"])
    },
    created() {

    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
