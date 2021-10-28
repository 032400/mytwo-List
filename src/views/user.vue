<template>
	<div>
		<div v-on:click="click()">user</div>
		
		<UserTo></UserTo>
		
		
		
		
	</div>
</template>

<script>
	import UserTo from '@/components/home/UserTo.vue'
	
	export default {
		components:{
			UserTo,
		},
		data() {
			return {
				
			}
		},
		created() {
			
		},
		methods:{
			click(){
				this.$toast('程序猿还在努力开发中···');
			}
		}
	}
</script>

<style>
</style>
