<template>
	<div class="goodList">
		<ul>
			<li v-for="item in goodslist" :key="item.id">
				<!-- <h3>{{item.name}}</h3> -->
				<img :src="item.list_pic_url" alt="">
				<p>{{item.name}}</p>
				<h3>￥&nbsp;{{item.retail_price}}&nbsp;元起</h3>
			</li>
			
		</ul>
	</div>
</template>

<script>
	
	
	export default {
		props:['goodslist',"tetx"]
	}
</script>

<style lang="less" scoped>
	.goodList{
		width: 7.5rem;
		ul{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			li{
				width: 49%;
				img{
					width: 100%;
				}
			}
			p{
				font-size: .25rem;
			}
			h3{
				font-size: .2rem;
				color: #8B0000;
			}
		}
	}
</style>
