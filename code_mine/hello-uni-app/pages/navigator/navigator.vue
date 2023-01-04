<template>
	<view>
		<view>导航跳转的学习</view>
		<navigator url="../uni-style/uni-style?id=90&password=123456@34hdjf&username=韦月鑫">跳转到详情页</navigator>
		<navigator url="../uni-style/uni-style" open-type="redirect">跳转到详情页</navigator>
		<navigator url="../message/message" open-type="switchTab">跳转到信息页</navigator>
		<button @click="goDetail">跳转至详情页</button>
		<button @click="goDetail2">跳转至详情页并卸载当前页</button>
		<button @click="goMessage">跳转到信息页</button>
		
		<button @click="goVideo">跳转至视频页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goDetail(){
				uni.navigateTo({
					url:"/pages/uni-style/uni-style?id=85&password=weiyuexin&username=weiyueixn",
					
				})
			},
			goVideo(){
				uni.navigateTo({
					url:"/pages/video/video"
				})
			},
			goDetail2(){
				uni.redirectTo({
					url:"/pages/uni-style/uni-style"
				})
			},
			goMessage(){
				uni.switchTab({
					url:"/pages/message/message",
				})
			}
		},
		onUnload() {
			console.log("原页面卸载了");
		}
	}
</script>

<style>

</style>
