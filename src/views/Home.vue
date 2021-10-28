<template>
	<div class="home">
		<div class="shake">
			<van-search @click="Seo()" v-model="value" disabled shape="round" input-align="center" :clearable="false"
				:placeholder="placeholder" />
		</div>
		<div class="swipe">

			<van-swipe class="my-swipe" :autoplay="3000">
				<van-swipe-item @click="sun()" v-for="(item,i) in banner" :key="i">
					<a>
						<img :src="item.image_url" alt="">
					</a>

				</van-swipe-item>
			</van-swipe>
		</div>
		<B :channel="channel" />
		<E :brandList="brandList"></E>
		<F :newGoodsList="newGoodsList"></F>
		<H :hotGoodsList="hotGoodsList"></H>
		<I :topicList="topicList"></I>
		<div v-for="item in categoryList" :key="item.id">
			<!-- categoryList 首先循环 第一层的九条数据
		 C 是 productHome组件 -->
			<h3>{{item.name}}</h3>
			<C :goodslist="item.goodsList" :tetx="item.name"></C>
		</div>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import {
		GetHomeData
	} from '@/request/api.js'
	
	import Tabbar from '@/components/home/tabbar.vue'
	
	import B from '@/components/home/B.vue'
	import C from '@/components/home/C.vue'
	import E from '@/components/home/E.vue'
	import F from '@/components/home/F.vue'
	import H from '@/components/home/H.vue'
	import I from '@/components/home/I.vue'
	// console.log(GetHomeData)
	export default {
		methods: {
			sun() {
				this.$router.push('/friends/propst')
			},
			Seo(){
				this.$router.push('/Seo')
			}
		},
		name: "Home",
		components: {
			Tabbar,
			B,
			C,
			E,
			F,
			H,
			I
		},
		data() {
			return {
				value: '',
				placeholder: "输入搜索关键词",
				banner: [],
				brandList: [],
				categoryList: [],
				channel: [],
				hotGoodsList: [],
				newGoodsList: [],
				topicList: []
			}
		},
		mounted() {
			GetHomeData().then(res => {
				// console.log(res)
				if (res.errno == 0) {
					let {
						banner,
						brandList,
						channel,
						categoryList,
						hotGoodsList,
						newGoodsList,
						topicList
					} = res.data
					this.banner = banner
					this.brandList = brandList
					this.categoryList = categoryList
					this.channel = channel
					this.hotGoodsList = hotGoodsList
					this.newGoodsList = newGoodsList
					this.topicList = topicList
					console.log(this.categoryList)
				}

			}).catch(err => {
				// 数据出问题，把问题打印出来
				console.log(err)
			})
		}
	}
</script>
<style lang="less" scoped>
	.home {
		width: 7.5rem;
		height: 100%;
		margin: 0 auto;

		.shake {
			width: 7.5rem;
			height: 100%;
		}

		.swipe {
			width: 7.5rem;
			height: 4rem;
			display: flex;
			overflow: hidden;
			flex-direction: row;

			.my-swipe {
				.van-swipe-item {
					width: 100%;
					height: 4rem;

					// display: inline-table;
					a {
						display: block;
						width: 7.5rem;
						height: 4rem;

						img {
							width: 100%;
							height: 100%;
							// display: flex;
						}
					}
				}
			}

		}
	}
</style>
