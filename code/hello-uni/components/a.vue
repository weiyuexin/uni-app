<template>
	<view>
		这是a组件：<button @click="addNum">修改b组件的数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			addNum () {
				uni.$emit('updateNum',10)
			}
		}
	}
</script>

<style>

</style>
