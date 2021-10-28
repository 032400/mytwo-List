import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
  state: {
	  //state 在vuex里面是存储数据
	  // 单一状态树	==	公共的数据存在
	  // vuex的state
	  // 组件与组件可以用props传递
	  // 父子组件可以用$emit
	  // 多个组件 使用同一个数据
	  // 可以使用vuex
	  count:0,
	  carList:[],
	  cartTotal:{
		  // 选中商品的价格数量
		  checkedGoodsAmount: 0,
		  checkedGoodsCount: 0,
		  // 商品价格和数量
		  goodsAmount: 0,
		  goodsCount: 0
	  }
	  
  },
  mutations: {
	  setCarList:function(state,cartLists){
		  state.carList=cartLists
	  },
	  setCarTotel:function(state,cartTotals){
		  state.cartTotal=cartTotals
	  },
	  jia(state,val){
		  var item=state.carList.find(ele=>ele.id==val.id)
		  console.log(item)
		  item.number++
	  },
	  jian(state,val){
		  var item=state.carList.find(ele=>ele.id==val.id)
		  if(item.number>0){
			   item.number--
		  }
	  },
	  clicks(state,val){
		  var item=state.carList.find(ele=>ele.id==val.id)
		  if(item.number==0){
			  alert("您还未选择任何商品")
		  }else{
			  alert("确定要结算此商品吗")
		  }
	  }
  },
  getters:{
	  totle(state){
		  return state.carList.reduce((totel,current)=>{
			  return totel+current.retail_price*current.number
		  },0)
	  }
  },
  actions: {
	  async getCart(content){
		  let res=await axios.get(`http://kumanxuan1.f3322.net:8001/cart/index`)
		  
		  let dat = res.data.data
		  content.commit('setCarList',dat.cartList)
		  content.commit('setCarTotel',dat.cartTotal)
		  console.log(dat)
	  }
  },
  modules: {
  }
})
