<template>
	<view class="page">
		<video :style="'height:'+screenHeight+'px'" src="http://101.43.253.15/video/dance.mp4" autoplay class="video" title="我的视频" page-gesture="true" show-play-btn="true" show-mute-btn="true" show-center-play-btn="true" enable-play-gesture="true" muted="true"></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight: getApp().globalData.screenHeight	
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.video{
	width: 100%;
	/* height: 60%; */
}
</style>
