<template>
	<view>
		<view>测试上传图片</view>
		<view>
			<video class="video" src="http://101.43.253.15/video/video.mp4" title="我的名字"   page-gesture="true" show-play-btn="true" show-mute-btn="true" show-center-play-btn="true" enable-play-gesture="true" ></video>
		</view>
		<button size="default" type="primary" @click="chooseImg">点击上传图片</button>
		<image v-for="item in imgArr" :src="item" @click="previewImg(item)"></image>
		<button type="warn" @click="uploadImg">上传图片到服务器</button>
		
		<!-- 根据不同的平台显示不同的内容 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgArr: []
			}
		},
		methods: {
			chooseImg() {
				uni.chooseImage({ //上传图片到本地缓存中
					count: 20,
					success: res => {
						console.log(res);
						this.imgArr = res.tempFilePaths
					}
				})
			},
			previewImg(current) {
				uni.previewImage({ //点击图片预览
					current,
					urls: this.imgArr,
					loop: true, //只在app有效
					indicator: 'number', //只在app有效
				})
			},
			uploadImg() { //上传图片到服务器  还没实现
				uni.uploadFile({
					url: "http://127.0.0.1:36677/upload",
					filePath: this.imgArr[0],
					name: 'file',
					formData: {
						"list":[
						        "E:/图片/壁纸/01f9b91505c8a61075384ee838b7a48e.jpg"
						    ]
					},
					success(res) {
						console.log(res)
					}
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style>
.video{
	width: 100%;
}
</style>
