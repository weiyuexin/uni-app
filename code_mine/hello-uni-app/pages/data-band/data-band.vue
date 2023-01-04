<template>
	<view>
		<view>数据绑定的学习</view>
		<view>{{msg}}</view>
		<view>{{"你好，"+name}}</view>
		<view>{{1+3}}</view>
		<view>{{flag?"true":"false"}}</view>
		<button @click="change(flag)">改变</button>
		<view class="images">
			<image class="img1" :src="img" mode="aspectFill"></image>
			<image class="img2" :src="img" mode="aspectFill"></image>
		</view>
		<view v-for="(item,index) in arr" :key="item.id">
			编号：{{index}},名字：{{item.name}}，年龄：{{item.age}}
		</view>
		<!-- v-on: 可以简写为@ -->
		<button type="primary" v-on:click="clickHandle(20,$event)">按钮</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				"msg": "hello uni-app",
				"name":"韦月鑫",
				"flag":true,
				"img":'https://img.weiyuexin.top/img/picgo/2022/12/07/20221207203515.jpg',
				arr:[
					{
						id:1,
						name:"宋小宝",
						age:30
					},{
						id:2,
						name:"刘能",
						age:20
					},{
						id:3,
						name:"赵四",
						age:36
					},{
						id:4,
						name:"小沈阳",
						age:60
					}
				]
			}
		},
		methods: {
			change(flag){
				flag = !flag
				console.log(flag)
			},
			clickHandle(num,e){
				console.log("点击我了")
				console.log(e)
				console.log(num)
				
			}
		}
	}
</script>

<style>
.images{
	width: 750rpx;
	background-color: red;
	padding-top: 10px;
}
.images .img1{
	width: 375rpx;
}
.images .img2{
	width: 375rpx;
}
</style>
