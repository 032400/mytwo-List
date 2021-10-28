<template>
	<div class="tabbar">
		<van-tabbar v-model="active">
		  <van-tabbar-item name="/" to="/" icon="home-o">首页</van-tabbar-item>
		  <van-tabbar-item name="friends" to="/friends" icon="label-o">专题</van-tabbar-item>
		  <van-tabbar-item name="fenlei" to="/fenlei" icon="apps-o">分类</van-tabbar-item>
		  <van-tabbar-item name="cart" to="/cart" icon="cart-o">购物车</van-tabbar-item>
		  <van-tabbar-item name="user" to="/user" icon="user-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
	
</template>
<script>
	// import { ref } from 'vue';
	
	export default {
	  // setup() {
	  //   const active = ref('/');
	  //   return { active };
	  // },
	  data() {
	  	return {
			active:0
		}
	  }
	}
</script>

<style lang="less" scoped>
	.tabbar{
		width: 7.5rem;
	}
</style>
