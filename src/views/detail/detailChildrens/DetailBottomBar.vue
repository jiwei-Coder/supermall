<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
    <sport-ball ref="ball" class="sport-ball"></sport-ball>
  </div>
</template>

<script>
	// import SportBall from 'components/content/sportBall/SportBall'
  import SportBall from "../../../components/content/sportBall/SportBall"
	export default {
		name: "DetailBottomBar",
    components: {
			SportBall
    },
    methods: {
      addToCart(event) {
      	// this.$refs.ball.run(event.target)
        this.$emit('addToCart')
      }
    }
	}
</script>

<style scoped>
  .bottom-bar {
    height: 44px;
    position: fixed;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 3px auto 1px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 44px;
  }

  .bar-right .cart {
    background-color: #ffe817;
    color: #333;
    border-radius:1px;
  }

  .bar-right .buy {
    background-color: #f69;
    border-radius:5px;
  }

  .sport-ball {
    position: absolute;
    left: 225px;
    bottom: 20px;
  }
</style>
