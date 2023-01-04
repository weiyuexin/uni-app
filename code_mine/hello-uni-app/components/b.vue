<template>
	<view>
		<view>这是b组件</view>
		<view>这是b组件的数据{{num}}</view>
	</view>
</template>

<script>
	export default {
		name:"b",
		data() {
			return {
				num:0
			};
		},
		created() {
			//自定义事件监听函数，事件可由uni.$emit触发
			uni.$on("updateNum",(num)=>{
				this.num+=num
			})
		}
	}
</script>

<style>

</style>