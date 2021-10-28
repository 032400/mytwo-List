<template>
	<div>			
	<p>{{message}}</p>
		<!-- <form @submit.prevent="postDate"> -->

			<input type="text" v-model="active" placeholder="请输入" @keyup.enter="add()" autofocus="autofocus">
			<button>添加</button>
		<!-- </form> -->
		
		<ul>
			<li v-for="(item,i) in prevent" :key="i">
				{{item.name}}<button @click="remove(i)">删除</button>
			</li>
		</ul>
	</div>
</template>

<script>
	// 请求方法 get(查询) post(添加) put(修改) delete(删除)
	import { GetCartData } from "../request/api.js"
	import axios from 'axios'
	export default {
		components:{
			
		},
		data(){
			return {
				 active:"阿斯顿法国红酒看",
				 message:"购物车",
				 prevent:[]
			}
		},
		methods:{
			// 获取数据
			getCart(){
				GetCartData().then(res=>{
					this.prevent =res.data.cartList
					console.log(this.prevent)
				})
				axios.get('http://kumanxuan1.f3322.net:8001/index/index')
				.then(res=>{
					this.prevent =res.data.data.channel
					console.log(this.prevent)
				})
			},
			// 添加数据
			postDate(){
				axios.post('http://kumanxuan1.f3322.net:8001/index/index',{
					active:this.active
				}).then(res=>{
					this.getCart()
				})
			},
			add(){
				this.prevent.push(this.active)
			},
			remove(index){
				console.log(index)
				this.prevent.splice(index,1)
			}
			
		},
		created() {
			this.getCart()
		}
	}
</script>

<style>
</style>
