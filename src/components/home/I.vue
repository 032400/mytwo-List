<template>
	<div class="topic">
		<h3>专题精选</h3>
		<van-swipe class="my-swipe" :loop="false" :width="300" :show-indicators="true" indicator-color="white">
		  <van-swipe-item v-for="item in topicList" :key="item.id" @click="chiKes()">
			  <img :src="item.item_pic_url" alt="">
			  <p>{{item.title}}<span>￥&nbsp;{{item.price_info}}&nbsp;元起</span></p>
			  <h4>{{item.subtitle}}</h4>
			  
		  </van-swipe-item>
		  
		</van-swipe>

	</div>
</template>

<script>
	export default {
		props:["topicList"],
		methods:{
			chiKes(){
				this.$router.push('/friends/propst')
			}
		}
	}
</script>

<style lang="less" scoped>
	.topic{
		h3{
			font-size: .2rem;
		}
		.my-swipe{
			// transform: translate(10px,10px);
			.van-swipe-item {
			    width: 100%;
				height: 5rem;
				margin-right:.2rem;
				img{
					width: 100%;
					height: 3.6rem;
				}
				p{
					font-size: .2rem;
					text-align: left;
					color: #000000;
					display: block;
					overflow: hidden;
					height: 25px;
				}
				h4{
					font-size: .2rem;
					text-align: left;
					height: .3rem;
					width: 80%;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}span{
					color: #8B0000;
				}
			  }
			
		} 
	}
	
</style>
