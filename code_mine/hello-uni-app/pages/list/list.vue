<template>
	<view>
		<button @click="get">发送get请求</button>
		<button type="primary" @click="setStorage">存储数据</button>
		<button type="warn" @click="getStorage">获取数据</button>
		<button type="warn" @click="removeId">移除数据</button>
		<view>这是列表页</view>
		<button @click="pullDown">下拉刷新</button>
		<view class="box-item" v-for="(item,index) in list">
			{{index+1 + '.' +item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					"前端",
					"JAVA",
					"UI",
					"大数据",
					"测试",
					"cpp",
					"GO", 
					"PHP",
					"前端",
					"JAVA",
					"UI",
					"大数据",
					"测试",
					"cpp",
					"GO", 
					"PHP"
				]
			}
		},
		methods: {
			pullDown(){ //点击触发下拉刷新
				uni.startPullDownRefresh()
			},
			get(){  //测试发送get请求
				uni.request({
					url:"http://101.43.253.15:8082/api/getlunbo",
					success: (res) => {
						console.log(res)
					}
				})
			},
			setStorage(){ //测试本地存储数据	
				/* uni.setStorage({
					key:"id",
					data:"存储的数据",
					success(res) {
						console.log("存储成功");
					}
				}) */
				uni.setStorageSync("id",200);
				console.log("存储成功");
			},
			getStorage(){ //测试获取数据
				/* uni.getStorage({
					key:"id",
					success(res) {
						console.log("获取成功");
						console.log(res.data);
					},
					fail() {
						console.log("获取失败，该数据可能不存在")
					}
				}) */
				const res = uni.getStorageSync("id")
				if(res != ""){
					console.log(res);
				}else{
					console.log("获取失败，该数据可能不存在")
				}
			},
			removeId(){ //测试移除数据
				/* uni.removeStorage({
					key:"id",
					success() {
						console.log("移除成功")
					}
				}) */
				uni.removeStorageSync("id")
			}
		},
		onPullDownRefresh() { //下拉刷新函数
			console.log("触发了下拉刷新")
			this.list = [
				"前端",
				"JAVA",
				"UI",
				"大数据",
				"测试",
				"cpp",
				"GO", 
				"PHP",
				"前端",
				"JAVA",
				"UI",
				"大数据",
				"测试",
				"cpp",
				"GO", 
				"PHP",
				"前端",
				"JAVA",
				"UI",
				"大数据",
				"测试",
				"cpp",
				"GO", 
				"PHP",
				"前端",
				"JAVA",
				"UI",
				"大数据",
				"测试",
				"cpp",
				"GO", 
				"PHP"
			]
			setTimeout(()=>{ //延迟两秒关闭下拉刷新
				uni.stopPullDownRefresh()
			},2000)
		},
		onReachBottom(){ //页面触底触发函数
			console.log("页面触底了")
			this.list.push("HTML")
			this.list.push("HTML")
			this.list.push("HTML")
			this.list.push("HTML")
			this.list.push("HTML")
			this.list.push("HTML")
			this.list.push("HTML")
		}
	}
</script>

<style>
	.box-item{
		height: 100px;
		line-height: 100px;
	}
</style>
