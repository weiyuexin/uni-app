<template>
	<view class="contact">
		<image class="image" src="https://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="callPhone">联系电话：18331361148（点击拨打）</view>
			<view>联系地址：河南省开封市龙亭区西郊乡河南大学金明校区</view>
		</view>
		<map class="map" :latitude="latitude" :scale="scale" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude:34.819998,
				longitude:114.312577,
				scale:16,
				markers:[
					{
						latitude:34.819998,
						longitude:114.312577,
						iconPath: '../../static/henu.png',
						width:50,
						height:50
					}
				]
			}
		},
		methods: {
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:"18331361148",
					success() {
						
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.image{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
