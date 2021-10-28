<template>
	<div class="list">
		<van-grid :column-num="3">
		  <van-grid-item @click="click()" v-for="item in list" :key="item.id" :icon="item.icon" :text="item.name" />
		</van-grid>
	</div>
	
</template>
<script>
	
	export default {
		
		data() {
			return {
				list:[
					{
						name:"我的订单",
						icon:"label-o",
						id:1
					},
					{
						name:"优惠卷",
						icon:"balance-list-o",
						id:2
					},
					{
						name:"礼品卡",
						icon:"goods-collect-o",
						id:3
					},
					{
						name:"我的收藏",
						icon:"star-o",
						id:4
					},
					{
						name:"我的足迹",
						icon:"flag-o",
						id:5
					},
					{
						name:"会员福利",
						icon:"contact",
						id:6
					},
					{
						name:"地址管理",
						icon:"location-o",
						id:7
					},
					{
						name:"账号安全",
						icon:"warning-o",
						id:8
					},
					{
						name:"联系客服",
						icon:"service-o",
						id:9
					},
					{
						name:"帮助中心",
						icon:"question-o",
						id:10
					},
					{
						name:"意见反馈",
						icon:"bulb-o",
						id:11
					}
				]
			}
		},
		methods:{
			click(){
				this.$toast('程序还在玩命开发中...');
			}
		}
	}
</script>

<style lang="less" scoped>
	.list{
		width: 7.5rem;
		margin: 0 auto;
	}
</style>
