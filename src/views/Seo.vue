<template>
	<div class="seo">
			<van-search
			  :clearable="false"
			  show-action
			  v-model="value"
			  :placeholder="placeholder"
			  @search="onSearch"
			  @cancel="cilck()"
			/>
	</div>
	
</template>

<script>
	import { Toast } from 'vant';
	export default {
		data(){
			return {
				placeholder:"礼包抢先领",
				value:'',
			}
		},
		methods:{
			onSearch(val) {
			  Toast(val+"商品不存在或已售空");
			},
			onCancel() {
			  Toast('取消');
			},
			cilck(){
				this.$router.go(-1)
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.seo{
		background: #eFeFeF;
		background: #eFeFeF;
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: 99;
		top: 0;
	}
</style>
