<template>
  <div class="list">
	  <!-- <van-nav-bar
		title="标题"
		left-text="返回"
		left-arrow
		@click-left="onClickLeft"
		color='#ccc'
		>
		<template #right>
    		<van-icon name="ellipsis" size='18' />
  		</template>
  	</van-nav-bar> -->
	  <div class="topBar">
			<a class="left" @click="onClickLeft()">
				<van-icon name="arrow-left" />
			</a>
			<a class='content'>标题</a>
			<a class="right">
				<van-icon name="weapp-nav" />
			</a>
		</div>
	  <ul>
		  <li v-for="item in list" :key="item.id">
			  <img :src="item.scene_pic_url" alt="">
				
				<span>{{item.title}}</span>
				<p>{{item.subtitle}}</p>
				<h3>￥&nbsp;{{item.price_info}}&nbsp;元起</h3>
		  </li>
	  </ul>
	  <div class="pagination">
		  <!-- <van-pagination @change="sun1()" @click="sun2()" v-model="currentPage" :page-count="2" mode="simple" />-->
		   <van-pagination v-model="currentPage" :page-count="2" mode="simple" >
		     <template #prev-text >
		       <van-icon  name="arrow-left" @click="sun1()" />
		     </template>
		     <template #next-text >
		       <van-icon name="arrow" @click="sun2()" />
		     </template>
		     <template #page="{ text }">{{ text }}</template>
		   </van-pagination>
	  </div>
  </div>
</template>
<script>
	import axios from 'axios'
	import { Toast } from 'vant'
	export default {
	  data() {
	  	return {
			currentPage:0,
			list:[]
		}
	  },
	  async mounted() {
		  // 默认加载
	  	let res = await axios.get('http://kumanxuan1.f3322.net:8001/topic/list')
		console.log(res)
		this.list = res.data.data.data
		console.log(this.list)
		// this.sun1();
		// this.sun2();
	  },
	  methods:{
			onClickLeft() {
				this.$router.back()
			},
		  // 第一页
		  async sun1(){
			  let res = await axios.get('http://kumanxuan1.f3322.net:8001/topic/list')
			  // console.log(res)
			  this.list = res.data.data.data
			  console.log(this.list)
		  },
		  // 第二页
		  async sun2(){
			  let res = await axios.get('http://kumanxuan1.f3322.net:8001/topic/list?page=2&size=10')
			  // console.log(res)
			  this.list = res.data.data.data
			  console.log(this.list)
		  }
	  }
	}
</script>
<style lang="less" scoped>
	.list{
		width: 7.5rem;
		margin: 0 auto;
		.topBar{
			display: flex;
			justify-content: space-between;
			// position: absolute;
			position:fixed;
			top:0;
			left:0;
			right:0;
			background:#F2F2F2;
			z-index: 99;
			width: 7.5rem;
			.left{
				margin-top: .1rem;
			}
			.content{
				margin-top: .05rem;
			}
			.right{
				margin-right: .2rem;
				margin-top: .1rem;
			}
		}
		ul{
			margin-top:.4rem;
			li{
				width: 100%;
				img{
					width: 100%;
				}
				span{
					// font-weight: 600;
				}
				p{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
				h3{
					color: #8B0000;
					font-size: .2rem;
				}
			}
		}
		.pagination{
			display: block;
			padding: .5rem 0;
		}
	}
	
</style>