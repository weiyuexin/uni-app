<template>
	<view>
		 <view>数据绑定的学习</view>
		 <view>{{msg}}</view>
		 <view>{{'你好'+'世界'}}</view>
		 <view>{{1+1}}</view>
		 <view>{{flag?'这是反话-我是假的':'这是反话-我是真的'}}</view>
		 <image :src="imgUrl"></image>
		 <view v-for="(item,index) in arr" :key="item.id">
			 序号：{{index}}，名字：{{item.name}}，年龄: {{item.age}}
		 </view>
		 <button type="primary" @click="clickHandle(20,$event)">按钮</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'hello',
				flag: false,
				imgUrl: 'http://destiny001.gitee.io/image/monkey_02.jpg',
				arr: [
					{
						name: '宋小宝',
						age: 20,
						id: 1
					},
					{
						name: '刘能',
						age: 20,
						id: 2
					},
					{
						name: '赵四',
						age: 30,
						id: 3
					},
					{
						name: '小沈阳',
						age: 22,
						id: 4
					}
				]
			}
		},
		
		methods: {
			clickHandle (num,e) {
				console.log(num,e)
			}
		}
	}
</script>

<style>
</style>
