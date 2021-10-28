<template>
	<div class="Category">
		<van-tabs v-model:active="active" @click="sun" >
		  <van-tab v-for="(item,i) in brotherCategory" :key="i" :title="item.name" >
			<h3>{{item.name}}</h3>
			<!-- <img :src="item.wap_banner_url" alt="">
			<h4>{{item.front_desc}}</h4>
			<p>{{item.front_name}}</p> -->
		  </van-tab>
		</van-tabs>
		<div class="plist">
			<van-grid :column-num="2" >
			  <van-grid-item v-for="(item,i) in plist" :key="i" :text="item.name" :to="/product/+item.id">
				  <van-image :src="item.list_pic_url"  />
				  <p>{{item.name}}</p>
				  </van-grid-item>
			</van-grid>
		</div>
		
	</div>
	
</template>

<script>
	import axios from 'axios'
	// import { GetCateGoryData } from '@/request/api.js'
	export default {
		props:["id"],
		data() {
			return {
				active:0,
				brotherCategory:[],
				plist:[]
			}
		},
		methods:{
			async sun(index){
			   // console.log(index)
			   // console.log(this.id)
				// let res=await axios.get(`http://kumanxuan1.f3322.net:8001/goods/category?id=${this.id}`)
				let page=index;
				let size=20;
				let id=this.id;
				let res=await axios.get(`http://kumanxuan1.f3322.net:8001/goods/list?id=${this.id}&size=${size}&page=${page}`)
				this.plist = res.data.data.data
				console.log(this.plist)
			 }
			
		},
		async mounted() {
			// 路由传参 三种方式
			// props params query
		let res=await axios.get(`http://kumanxuan1.f3322.net:8001/goods/category?id=${this.id}`)
			// console.log(this.id)
			// console.log(res)
			this.brotherCategory = res.data.data.brotherCategory;
			
			// let page=index;//传入商品的下标值
			// let size=20;// 获取商品的数量
			// let id=this.id//传入商品分类的id
			// let res = await axios.get(`http://kumanxuan1.f3322.net:8001/goods/list?id=${this.id}&size=${size}&page=${page}`)
			// this.plist = res.data.data.data
			// console.log(this.plist)
			this.sun()
			
		}
	}
</script>

<style lang="less" scoped>
	.Category{
		width: 7.5rem;
		margin: 0 auto;
		ul{
			width: 7.5rem;
			display: flex;
			flex-wrap: wrap;
			li{
				width: 48%;
				padding-left: .1rem;
				img{
					width: 100%;
				}
				p{
					font-size: .25rem;
					height: .3rem;
					overflow: hidden;
				}
				span{
					color: #8B0000;
					font-size: .2rem;
					display: block;
				}
			}
		}
		.plist{
			.van-image{
				width: 50%;
			}
			p{
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				font-size: .2rem;
			}
		}
	}
</style>
