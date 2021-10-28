<template>
	<div class="channel">
		<van-grid :column-num="5">
		  <van-grid-item v-for="(items,i) in channel" :key="i" :icon="items.icon_url" :text="items.name" />
		</van-grid>
	</div>
	
</template>

<script>
	export default{
		props:['channel']
	}
</script>

<style lang="less" scoped>
	.channel{
		width: 7.5rem;
		height: 100%;
	}
</style>
