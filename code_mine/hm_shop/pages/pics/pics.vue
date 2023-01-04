<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" :class="active===index?'active':''" v-for="(item,index) in cates" :key="item.id">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in secondData" :key="item.id">
				<!-- <image :src="item.img_url"></image> -->
				<image @click="previewImage(item.img_url)" src="https://img.weiyuexin.top/img/picgo/2022/12/18/20221218023344.jpg"></image>
				<text>{{item.title}}</text>
			</view>
			<view class="zanwu">
				<text v-if="secondData.length === 0">暂无数据</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondData:[]
			}
		},
		methods: {
			//获取左侧导航数据
			async getPicsCate() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				this.cates = res.data.message
				//获取一级分类的数据
				this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle(index,id){
				this.active = index
				//获取右侧的数据
				const res = await this.$myRequest({
					url:'/api/getimages/'+id
				})
				this.secondData = res.data.message
			},
			previewImage(current){
				const urls = this.secondData.map(item=>{
					// return item.img_url
					return "https://img.weiyuexin.top/img/picgo/2022/12/18/20221218023344.jpg"
				})
				//current = "https://img.weiyuexin.top/img/picgo/2022/12/18/20221218023344.jpg"
				uni.previewImage({
					urls,
					current
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eeeeee;

			view {
				height: 60px;
				width: 100%;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 35rpx;
				border-bottom: 1px solid #eee;
			}

			.active {
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right{
			height: 100%;
			width: 530rpx;
			margin: 0 auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5rpx;
				}
				text{
					font-size: 28rpx;
					line-height: 60rpx;
				}
			}
			.zanwu{
				width: 530rpx;
				height: 50px;
				line-height: 50px;
				text-align: center;
			}
		}
	}
</style>
