<template>
	<div class="newGood">
		<h3>周一周四·新品首发</h3>
		<ul>
			<li v-for="item in newGoodsList" :key="item.id">
				<img :src="item.list_pic_url" alt="">
				<span>{{item.name}}</span>
				<p>￥&nbsp;{{item.retail_price}}&nbsp;元</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:["newGoodsList"]
	}
</script>

<style lang="less" scoped>
	.newGood{
		margin-top: .5rem;
		width: 7.5rem;
		height: 100%;
		ul{
			li{
				width: 48%;
				display: inline-table;
				img{
					width: 100%;
				}
				span{
					font-size: .2rem;
				}
				p{
					color: #8B0000;
				}
			}
		}
	}
</style>
