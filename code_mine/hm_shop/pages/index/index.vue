<template>
	<view class="home">
		<swiper indicator-dots circular>
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="title">
				推荐商品
			</view>
			<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers:[],//轮播图
				goods:[],//首页商品
				navs:[ //首页导航数据
					{
						icon:'iconfont icon-ziyuan',
						title:'黑马超市',
						path:'/pages/goods/goods'
					},
					{
						icon:'iconfont icon-guanyuwomen',
						title:'联系我们',
						path:'/pages/contact/contact'
					},
					{
						icon:'iconfont icon-tupian',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'iconfont icon-shipin',
						title:'学习视频',
						path:'/pages/videos/videos'
					}
				]
			}
		},
		components:{
			"goods-list":goodsList
		},
		methods: {
			//获取轮播图的数据
			async getSwipers(){
				console.log("获取轮播图的数据");
				/* uni.request({
					url:"http://localhost:8082/api/getlunbo",
					success:res=>{ //箭头函数解决this指向错误的问题
						console.log(res);
						if(res.data.status !== 0){
							return uni.showToast({
								title:"获取数据失败"
							})
						}
						//请求成功，将数据保存
						this.swipers = res.data.message
					}
				}) */
				// 使用封装的请求函数
				const res = await this.$myRequest({
					url:"/api/getlunbo"
				})
				console.log(res);
				this.swipers = res.data.message
			},
			//获取热门商品
			async getHotGoods(){
				const res = await this.$myRequest({
					url:"/api/getgoods?pageindex=1"
				})
				console.log(res);
				this.goods = res.data.message
			},
			//导航点击的处理函数
			navItemClick(url){
				console.log("跳转了");
				uni.navigateTo({
					url
				})
			},
			//导航到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
			}
		}
		.nav{
			display: flex;
			.nav_item{
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #ffffff;
					font-size: 50rpx;
				}
				.icon-tupian{
					font-size: 40rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot_goods{
			background-color: #eee;
			overflow: hidden;
			margin-top: 10px;
			.title{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background-color: #ffffff;
				margin: 8rpx 0;
				font-weight: bold;
			}
			
		}
	}

</style>
