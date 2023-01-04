<template>
	<view>
		<!-- text -->
		<view><text>唱歌跳舞打篮球</text></view>
		<view><text selectable>唱歌跳舞打篮球</text></view> 
		<view><text selectable space="ensp">唱歌  跳舞  打篮球</text></view> 
		<view><text selectable space="emsp">唱歌  跳舞  打篮球</text></view> 
		<view><text selectable space="nbsp" style="font-size: 30px;">唱歌  跳舞  打篮球</text></view>
		<view><text>&amp;</text></view>
		
		<!-- view -->
		<view class="box2" hover-class="box2-active">
			<view class="box" hover-class="box-active" :hover-stop-propagation="true" :hover-start-time="2000" :hover-stay-time="2000">我是一个大盒子</view>
		</view>
		
		<!-- button -->
		<button>默认按钮</button>
		<button size="mini">小按钮</button>
		<button type="primary">按钮</button>
		<button type="warn">按钮</button>
		<button type="primary" plain>按钮</button>
		<button type="primary" disabled>按钮</button>
		<button type="primary" loading>按钮</button>
		
		<!-- image -->
		<image src="http://destiny001.gitee.io/image/cxk.gif"></image>
		<image src="https://img.weiyuexin.top/img/picgo/2022/12/08/20221208000247.png"></image>
		<image mode="aspectFit" src="https://img.weiyuexin.top/img/picgo/2022/12/08/20221208000247.png"></image>
		<image mode="aspectFill" src="https://img.weiyuexin.top/img/picgo/2022/12/08/20221208000247.png"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
.box{
	width: 100px;
	height: 100px;
	background-color: green;
	margin-left: 50px;
	margin-top: 50px;
}
.box-active{
	background-color: red;
}
.box2{
	width: 200px;
	height: 200px;
	background-color: blue;
}
.box2-active{
	background-color: pink;
}
</style>
