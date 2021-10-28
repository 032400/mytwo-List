<template>
	<div>
		<div class="search">
			<van-search disabled shape="round" background="#fff" placeholder="请输入搜索关键词" @click="btn" />
		</div>
		<div class="fenl">
			<van-sidebar v-model="activeKey">
			  <van-sidebar-item
			    v-for="item in categoryList"
			    :key="item.id"
			    :title="item.name"
				 @click="fenlFn(item.id)"
			  />
			</van-sidebar>
			<ul>
				<div class="banner">
					 <van-image :src="banner_url">
					 </van-image>
					  <h5>{{ front_desc }}</h5>
				</div>
				<div class="name">
					<h3>{{name}}</h3>
				</div>
				<div>
					<van-grid :column-num="3">
					  <van-grid-item v-for="item in subCategoryList" :key="item.id" :icon="item.wap_banner_url" :to="/categoryList/+item.id" :text="item.name" />
					  
					</van-grid>
				</div>
			</ul>
		</div>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import {
		GetChannelData,GetFenleiData
	} from '@/request/api.js'

	import Tabbar from '@/components/home/tabbar.vue'
	export default {
		components:{
			Tabbar
		},
		data() {
			return {
				activeKey: 0, // 下标值
				subCategoryList: [],
				banner_url: '', // 分类左边的banner图片
				name: '',
				front_desc: '', //标题,
				categoryList: []
			}
		},
		created() {
			// GetChannelData().then(res => {
			// 	console.log(res)
			// 	let {
			// 		categoryList,
			// 		banner_url,
			// 		name,
			// 		front_desc
			// 	} = res.data
			// 	this.categoryList = categoryList;
			// 	this.banner_url = banner_url;
			// 	this.name = name;
			// 	this.front_desc = front_desc;
			// })
			GetChannelData().then((res)=>{
				let {categoryList,currentCategory} = res.data;
				this.categoryList=categoryList;
				this.subCategoryList=currentCategory.subCategoryList;
				let index = this.activeKey;
				
				let { front_desc, banner_url, name } = res.data.categoryList[index];
				this.front_desc = front_desc;
				this.banner_url = banner_url;
				this.name = name;
				//   this.front_desc = "回家，放松身心";
			})
		},
		methods: {
			fenlFn(id) {
			  GetChannelData().then((res) => {
			    let index = this.activeKey;
			    let { front_desc, banner_url, name } = res.data.categoryList[index];
			    this.front_desc = front_desc;
			    this.banner_url = banner_url;
			    this.name = name;
			    //   this.front_desc = "回家，放松身心";
			  });
			  this.diaoyong(id);
			},
			diaoyong(id) {
			  GetFenleiData({
			    id,
			  }).then((res) => {
			    let { subCategoryList } = res.data.currentCategory;
			    this.subCategoryList = subCategoryList;
				console.log(this.subCategoryList)
			  });
			},
			btn() {
				this.$router.push("/Seo");
			},
		}
	}
</script>

<style lang="less" scoped>
	.search{
		margin: 0 auto;
		width: 7.5rem;
	}
	.fenl {
		margin: 0 auto;
		width: 7.5rem;
		height: 100%;
		display: flex;
		justify-content: space-between;
		.van-sidebar {
			.van-sidebar-item{
				text-align: left;
			}
		}
		ul{
			width: 100%;
			height: 100%;
			.banner{
					height: 2.5rem;
				    position: relative;
				    padding: 0 .3rem 0 .1rem;
				.van-image{
					width: 100%;
					height: 100%;
					margin: 0 .1rem;
					border-radius: 0.12rem;
					box-shadow: 0 0 6px black;
					filter: brightness(0.5);
				}
				h5{
					position: absolute;
					top: 0.8rem;
					left: 0;
					color: white;
					width: 100%;
					text-align: center;
				}
			}
			.name{
				h3{
					font-weight:400;
				}
			}
		}
	}
</style>
