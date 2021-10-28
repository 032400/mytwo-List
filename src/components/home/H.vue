<template>
	<div class='hotGoodsList'>
		<h3>人气推荐</h3>
		<ul>
			<li v-for='item in hotGoodsList' :key="item.id">
				<img :src="item.list_pic_url" alt="">
				<div class="right">
					<h4>{{item.name}}</h4>
					<h4>{{item.goods_brief}}</h4>
					<span>￥&nbsp;{{item.retail_price}}&nbsp;元起</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:['hotGoodsList']
	}
</script>

<style lang="less" scoped>
	.hotGoodsList{
		width: 7.5rem;
		h3{
			font-size: .25rem;
		}
		ul{
			display: flex;
			flex-direction: column;
			li{
				display: flex;
				justify-content: space-between;
				width: 100%;
				img{
					width: 30%;
				}
				.right{
					width: 100%;
					font-size: .2rem;
					text-align: left;
					p{}h4{}span{color: #8B0000;}
				}
			}
		}
		
	}
</style>
