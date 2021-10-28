<template>
	<div class="carts">
		<div class="arrow">
			<van-icon @click="fanhui()" name="arrow-left" />
			<span>购物车</span>
			<van-icon name="ellipsis" />
		</div>
		
		
		<!-- {{this.$store.state.count}} -->
		<ul>
			<li v-for="(item,i) in carList" :key="i">
				<!-- <input type="checkbox" v-model="item.checked" @change="checkEvent($event,item)"> -->
				<van-checkbox v-model="item.checked" @change="checkEvent($event,item)"></van-checkbox>
				<a>
					<img :src="item.list_pic_url" style="width: 100%;" alt="">
				</a>
				<div>
					<span>{{item.goods_name}}</span>
					<span>￥{{item.retail_price}}</span>
				</div>
					<button @click="jian(item)">-</button>
					<span class="sp"><a>x{{item.number}}</a></span>
					<button @click="jia(item)">+</button>
			</li>
		</ul>
			<!-- <van-card
			  v-for="item in setCarLists"
			  num="1"
			  :price="item.retail_price"
			  desc="商品"
			  :title="item.goods_name"
			  :thumb="item.list_pic_url"
			/> -->
			<van-submit-bar
			:price="cartTotal.checkedGoodsAmount*100" 
			button-text="提交订单" 
			@submit="onSubmit">
			<van-checkbox v-model="AllChecked">全选</van-checkbox>
			 
			</van-submit-bar>
			<!-- <div class="btom" v-for="(item,i) in carList" :key="i" ><span>全选</span><span>总计:{{totles}}</span><button @click="click(item)">结算</button></div> -->
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	let mapStateobj=mapState(['carList','cartTotal'])
	// 引入接口
	import {GoodsChecked} from '../request/api.js'
	// console.log(GoodsChecked)
	export default {
		data() {
			return {
				checked:true
			}
		},
		computed:{
			// ...展开运算符
			// 从展开运算符里面 解析出'cartTotal','cartList'
			...mapStateobj,
			// setCarLists(){
			// 	return this.$store.state.carList
			// },
			// setCarTotels(){
			// 	return this.$store.state.cartTotal
			// },
			totles(){
				return this.$store.getters.totle
			},
			AllChecked:{
				 set(val){
					 // 返回选中的状态
					 this.$store.getters.isAllChecked
					 // console.log(val)
				 },
				 get(){ // 每个商品中都有一个checked
					 //checkedGoodsCount 选中商品数量
					 if(this.cartTotal.goodsCount==this.cartTotal.checkedGoodsCount){
						 return true
					 }else{
						 return false
					 }
				 }
			}
			
		},
		methods:{
			fanhui(){this.$router.back()},
			getCarts(){
				this.$store.dispatch('getCart')
			},
			jia(val){
				this.$store.commit('jia',val)
			},jian(val){
				this.$store.commit('jian',val)
			},
			click(val){
				this.$store.commit('clicks',val)
			},
			onSubmit(){
				
			},
			checkEvent(event,item){
			   // console.log(event,item)
			   GoodsChecked({isChecked:event ? 1 : 0,productIds:item.product_id}).then((res)=>{
				   // console.log(res)
				   let datas = res.data
				   // console.log(datas)
				   
				   this.$store.commit('setCarList',datas.cartList)
				   this.$store.commit('setCarTotel',datas.cartTotal)
			   })
			}
		},
		created() {
			this.getCarts()
		}
	}
</script>

<style lang="less">
	.carts{
		width: 7.5rem;
		height: 100%;
		margin: 0 auto;
		.arrow{
			display: flex;
			justify-content: space-between;
			padding: .2rem .2rem 0 .3rem;
		}
		ul{
			li{
				display: flex;
				.van-checkbox{
					width: 10%;
				}
				a{
					display: block;
					width: 40%;
				}
				div{
					width: 55%;
					// display: grid;
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
					span{
						font-size: .2rem;
					}
				}
				span{
					// width: 20%;
					// display: block;
					// margin-top: 1.5rem;
					a{
						width: 100%;
						display: block;
						margin-top: 1.5rem;
						margin-right: 1rem;
					}
				}
				button{
					height: .5rem;
					outline: none;
					// border: beige;
					margin-top: 1.4rem;
				}
				.sp{
					width: 10%;
					color: #C0C5CE;
					font-size: .2rem;
				}
			}
		}
		.btom{
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			// justify-content: space-between;
			justify-content: space-around;
		}
	}
</style>
