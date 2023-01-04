<template>
	<view>
		<view>导航跳转的学习</view>
		<navigator url="/pages/detail/detail?id=80&age=19">跳转至详情页</navigator>
		<navigator url="/pages/message/message" open-type="switchTab">跳转至信息页</navigator>
		<navigator url="/pages/detail/detail" open-type="redirect">跳转至详情页</navigator>
		<button @click="goDetail">跳转之详情页</button>
		<button @click="goMessage">跳转至信息页</button>
		<button type="primary" @click="redirectDetail()">跳转到详情页并关闭当前页面</button>
		<button type="primary" @click="addToCar">加入购物车</button>
	</view>
</template>

<script>
	export default {
		onUnload() {
			console.log('导航页面卸载了')
		},
		
		methods: {
			goDetail () {
				uni.navigateTo({
					url: '/pages/detail/detail?id=80&age=19'
				})
			},
			goMessage () {
				uni.switchTab({
					url: '/pages/message/message'
				})
			},
			redirectDetail () {
				uni.redirectTo({
					url: '/pages/detail/detail'
				});
			},
			addToCar () {
				uni.$emit('updateCart',{
					id: 10,
					name: '贸易'
				})
			}
		}
	}
</script>

<style>
</style>
