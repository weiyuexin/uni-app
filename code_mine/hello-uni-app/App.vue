<script>
	export default {
		/* 应用的生命周期函数 */
		onLaunch: function() { //uni-app初始化完成时触发（全局只触发一次）
			console.log('App Launch')
			uni.getSystemInfo({ //设置屏幕高度
				success: res => {
					//减去tabbar的高度，默认为50px
					this.globalData.screenHeight = res.screenHeight - 100;
				}
			})
		},
		onShow: function() { //uni-app启动或从后台切换到前台时触发
			console.log('App Show')
		},
		onHide: function() { //uni-app从前台切换到后台时触发
			console.log('App Hide')
		},
		onError: function(e) { //uni-app报错时触发
			console.log("发生了错误")
			console.log(e)
		},
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./static/fonts/iconfont.css");
</style>
