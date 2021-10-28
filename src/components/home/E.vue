<template>
	<div class="brand">
		<h3>品牌制造商直供</h3>
		<ul>
			<li v-for="item in brandList" :key="item.id">
				<img :src="item.list_pic_url" alt="">
				<h4>{{item.name}}</h4>
				<p>￥&nbsp;{{item.floor_price}}&nbsp;元</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:["brandList"],
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.brand{
		margin-top: .5rem;
		width: 7.5rem;
		height: 100%;
		h3{
			font-size: .25rem;
		}
		ul{
			li{
				width: 47%;
				display: flex;
				display: inline-table;
				position: relative;
				padding: 0 .1rem;
				img{
					width: 100%;
				}
				h4{
					position: absolute;
					top: 0;
					left: .2rem;
				}
				p{
					position: absolute;
					top: .6rem;
					left: .2rem;
					color: #8B0000;
				}
			}
		}
	}
</style>
