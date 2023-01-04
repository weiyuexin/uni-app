<template>
	<view>
		<view>
			样式的学习
		</view>
		<view class="box1">
			测试文字
			<text>123</text>
		</view>
		<view class="iconfont icon-tupian"></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	@import url("./a.css");
	.box1{
		width: 375rpx;
		height: 375rpx;
		background: $global-color;
		font-size: 30rpx;
		color: #fff;
		text{
			color: pink;
		}
	}
</style>
