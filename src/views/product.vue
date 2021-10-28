<template>
	<!-- 商品详情页 -->
	<div class="sp">
		<div class="topBar">
			<a class="left" @click="click()">
				<van-icon name="arrow-left" />
			</a>
			<a class="right">
				<van-icon name="weapp-nav" />
			</a>
		</div>
		<van-swipe class="my-swipe" @change="onChange" :autoplay="3000" indicator-color="white">
		  <van-swipe-item v-for="(item,i) in gallerys" :key="i">
			   <van-image :src="item.img_url" />
		  </van-swipe-item>
		   <!-- <template #indicator="{ active }">
		      <div class="custom-indicator">{{ active + 1 }}/4</div>
		    </template> -->
			 <template #indicator>
			    <div class="custom-indicator">{{ current + 1 }}/4</div>
			  </template>
		</van-swipe>
		<div class="infos">
			<div class="three">
				<span>30天无理由退货</span>
				<span>48小时快速退款</span>
				<span>满88元免邮费</span>
			</div>
			<p class="names">{{infos.name}}</p>
			<p class="brief">{{infos.goods_brief}}</p>
			<h5>￥&nbsp;{{infos.retail_price}}</h5>
			
		</div>
		<div class="top">
			<a>选择规格</a>
			<van-icon name="arrow" />
		</div>
		<h5>商品参数</h5>
		<div class="klic">
			<ul class="attribute">
				<li v-for="(item,i) in attribute" :key="i">
						<span class="name">{{item.name}}</span>
				</li>
			</ul>
			<ul class="attValue">
				<li v-for="(item,i) in attribute" :key="i">
						<span class="value">{{item.value}}</span>
				</li>
			</ul>
		</div>
		<div class="div" v-html="infos.goods_desc"></div>
		<van-goods-action>
		  <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
		  <van-goods-action-icon icon="cart-o" text="购物车" to="/carts" />
		  <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
		  <van-goods-action-button type="warning" text="加入购物车" @click="onAddCartClicked()" />
		  <van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
		<van-sku
		  v-model="show"
		  :sku="sku"
		  :goods="goods"
		  @buy-clicked="onBuyClicked"
		  @add-cart="onAddCartClicked"
		/>
		
	</div>
	
</template>

<script>
	import axios from 'axios'
	let sku={
  // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
  // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
  tree: [
    {
      k: '颜色', // skuKeyName：规格类目名称
      k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
      v: [
        {
          id: '1', // skuValueId：规格值 id
          name: '红色', // skuValueName：规格值名称
          imgUrl: 'https://img01.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
          previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
        },
        {
          id: '1',
          name: '蓝色',
          imgUrl: 'https://img01.yzcdn.cn/2.jpg',
          previewImgUrl: 'https://img01.yzcdn.cn/2p.jpg',
        }
      ],
      largeImageMode: true, //  是否展示大图模式
    }
  ],
  // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
  list: [
    {
    	id: 2257, // skuId
    	's_1': '1', // 规格类目 k_s 为 s1 的对应规格值 id
    	's_2': '3', // 规格类目 k_s 为 s2 的对应规格值 id
    	price: 100, // 价格（单位分）
    	stock_num: 110 // 当前 sku 组合对应的库存
    },
    {
    	id: 2258, // skuId
    	's_1': '1', // 规格类目 k_s 为 s1 的对应规格值 id
    	's_2': '4', // 规格类目 k_s 为 s2 的对应规格值 id
    	price: 100, // 价格（单位分）
    	stock_num: 110 // 当前 sku 组合对应的库存
    },
    {
    	id: 2259, // skuId
    	's_1': '1', // 规格类目 k_s 为 s1 的对应规格值 id
    	's_2': '5', // 规格类目 k_s 为 s2 的对应规格值 id
    	price: 100, // 价格（单位分）
    	stock_num: 110 // 当前 sku 组合对应的库存
    },
    {
    	id: 2551, // skuId
    	's_1': '2', // 规格类目 k_s 为 s1 的对应规格值 id
    	's_2': '3', // 规格类目 k_s 为 s2 的对应规格值 id
    	price: 100, // 价格（单位分）
    	stock_num: 150 // 当前 sku 组合对应的库存
    },
    {
    	id: 2552, // skuId
    	's_1': '2', // 规格类目 k_s 为 s1 的对应规格值 id
    	's_2': '4', // 规格类目 k_s 为 s2 的对应规格值 id
    	price: 100, // 价格（单位分）
    	stock_num: 150 // 当前 sku 组合对应的库存
    },
    {
    	id: 2553, // skuId
    	's_1': '2', // 规格类目 k_s 为 s1 的对应规格值 id
    	's_2': '5', // 规格类目 k_s 为 s2 的对应规格值 id
    	price: 100, // 价格（单位分）
    	stock_num: 150 // 当前 sku 组合对应的库存
    },
  ],
  price: '1.00', // 默认价格（单位元）
  stock_num: 227, // 商品总库存
  collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
  none_sku: false, // 是否无规格商品
  
  hide_stock: false // 是否隐藏剩余库存
}
	export default {
		props:["id"],
		data() {
			return {
				show:false,
				current: 0,
				sku: sku,
				goods: {
					// 默认商品 sku 缩略图
					picture: '',
					title:""
				},
				gallerys:[],
				infos:[],
				attribute:[],
				brand:[],
				issue:[],
				data:[]
			}
		},
		async created() {
			let res = await axios.get(`http://kumanxuan1.f3322.net:8001/goods/detail?id=${this.id}`)
			this.data = res.data.data;
			this.gallerys = res.data.data.gallery;
			this.infos = res.data.data.info
			this.attribute =res.data.data.attribute
			this.brand=res.data.data.brand
			this.issue=res.data.data.issue
			console.log(res)
			
			// 商品图片
			this.goods.picture=this.infos.primary_pic_url
			this.goods.title=this.infos.name
			// 修改价格
			this.sku.price=this.infos.retail_price
			this.sku.stock_num=this.infos.goods_number
			// 没有数据用自己的数据
			
			let trees=[]
			this.data.specificationList.forEach((item,index)=>{
				let arrs=[]
				item.valueList.forEach((product,i)=>{
					// product.value 存储的是商品的属性
					// console.log(product.value)
					arrs.push({
						id:product.id,
						name:product.value
					})
				})
				trees.push({
					k:item.name,
					v:arrs,
					k_s:"s_"+item.specification_id
				})
			})
			this.sku.tree = trees
			console.log(this.sku.tree)
			
		},
		methods:{
			onChange(index) {
			      this.current = index;
			},
			onBuyClicked(){	// 提交到订单页
				
			},
			async onAddCartClicked(skuDate){// 加入购物车
				this.show=true
				let specification=skuDate.selectedSkuComb['s_1']+skuDate.selectedSkuComb['s_2']
				console.log(specification)
				let result = this.data.productList.filter((item,index)=>{
					console.log(item)
					// specification 是skuDate返回的商品数据规格
					// item.goods_specification_ids 返回的商品数据规格
					if(item.goods_specification_ids==specification){
						return true
					}else{
						return false
					}
					})
					console.log(result)
					
				// 传入商品id  传入商品数量
				// let resCar = await axios.post(`http://kumanxuan1.f3322.net:8001/cart/add?id=${this.data.productList[0].goods_id}`)
				// console.log(resCar)
			},
			click(){
				this.$router.back()
			}
		},
		computed: {
			images: function() {
				if (this.data.gallery == undefined) {
					return []
				} else {
					return this.data.gallery
				}
			}
		}
	}
</script>

<style lang="less">
	
	.sp{
		position: relative;
		margin: 0 auto;
		width: 7.5rem;
		.topBar{
			display: flex;
			justify-content: space-between;
			position: absolute;
			z-index: 99;
			width: 7.5rem;
			.left{
				margin-top: .1rem;
			}
			.right{
				margin-right: .2rem;
				margin-top: .1rem;
			}
		}
		.van-swipe{
			width: 7.5rem;
			.van-swipe-item{
				.van-image{
					width: 100%;
					height: 5rem;
				}
			}
			 .custom-indicator {
			    position: absolute;
			    right: 5px;
			    bottom: 5px;
			    padding: 2px 5px;
			    font-size: 12px;
				color: white;
			    background: rgba(0, 0, 0, 0.1);
			  }
		}
		.infos{
			width: 7.5rem;
			.three{
				width: 100%;
				span{
					color: #ccc;
					margin-left: .2rem;
					font-size: .2rem;
				}
			}
			.names{
				font-size: .4rem;
			}
			h5{
				color: #8B0000;
			}
			.brief{
				font-size: 12px;
				color: #ccc;
			}
		}
		 .content {
		    padding: 16px 16px 160px;
		  }
		  .top{
			  display: flex;
			  justify-content: space-between;
			  line-height: 1rem;
			  background: #fafafa;
			 a{
				  text-align: center;
				  display: block;
				  margin-left: 3.3rem;
				  font-size: .2rem;
			  }
			  .van-icon{
				  line-height: 1rem;
				  margin-right: .8rem;
				  font-size: .2rem;
			  }
		  }
		   .klic{
				  display: flex;
				  padding: 0 1rem 0 0;
				  justify-content: space-between;
			  .attribute{
					width: 50%;
					overflow: hidden;
			  	li{
			  		line-height: .4rem;
					font-size: .2rem;
			  		.name{
						color: #ccc;
			  		}
			  	}
			  }
			  .attValue{
					width: 50%;
					text-align: left;
				.value{
					color: #ccc;
					// margin-left: .2rem;
					line-height: .4rem;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					font-size: .2rem;
				
				}
			  }
		  }
		  .van-popup{
			  text-align: start;
		  }
		  .div{
			  width: 7.5rem;
			  padding-top: .5rem;
			 p{
				  width: 7.5rem;
				  margin: 0;
				  padding: 0;
				 img{
					  width: 100%;
					  height: 100%;
				  }
			 }
		 }
	}
</style>
