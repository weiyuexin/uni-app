<template>
	<view>
		<view>这是a组件</view>
		<button @click="addNum">修改b组件的数据</button>
	</view>
</template>

<script>
	export default {
		name:"a",
		data() {
			return {
				
			};
		},
		methods:{
			addNum(){
				//调用b组件中定义的事件监听函数
				uni.$emit("updateNum",10)
			}
		}
	}
</script>

<style>

</style>