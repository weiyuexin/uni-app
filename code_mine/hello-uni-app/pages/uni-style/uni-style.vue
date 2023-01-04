<template>
	<view>
		<view>样式的学习</view>
		<view class="box1">
			测试文字
		</view>
		<view class="iconfont icon-shipin"></view>
		<text class="iconfont icon-guanyuwomen"></text>
		<view class="iconfont icon-ziyuan"></view>
		<view>
			<view>传递过来的参数</view>
			<!-- 判断传递过来的参数是否为空 -->
			<view v-if="JSON.stringify(user)!='{}'">
				<view>id : {{user.id}}</view>
				<view>username : {{user.username}}</view>
				<view>password : {{user.password}}</view>
			</view>
			<view v-else>传递的参数为空</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					id:"",
					username:"",
					password:""
				}
			}
		},
		methods: {

		},
		onLoad(options) { //options是上一个页面传递的参数
			this.user = options;
			console.log(this.user);
			
		}
	}
</script>

<style lang="scss">
	@import url("../../static/css/b.css");

	.box1 {
		/* 750rpx表示一个屏幕的宽度，会随着屏幕的变化而动态变化*/
		width: 375rpx;
		height: 375rpx;
		background-color: $global-color;
		font-size: 30rpx;
		/* color: #ffffff; */
	}
</style>
