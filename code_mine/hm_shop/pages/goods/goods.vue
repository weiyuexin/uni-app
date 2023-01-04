<template>
	<view class="goods_list">
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">-------没有更多了------</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex: 1,
				goods:[],
				flag:false
			}
		},
		methods: {
			//获取商品列表的数据
			async getGoodsList(callBack){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex='+this.pageindex
				})
				//获取到新数据后将原数据和新数据保存到一起
				this.goods = [...this.goods,...res.data.message]
				console.log(this.goods);
				callBack && callBack()
			},
			//导航到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		},
		components:{
			"goods-list":goodsList
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() { //下滑触底
		    //判断是否已经获取了所有数据
			if(this.goods.length % 10 >0) return this.flag=true
			this.pageindex++
			this.getGoodsList()
		},
		onPullDownRefresh() { //下拉刷新
			console.log("下拉刷新了");
			this.pageindex = 1
			this.goods = []
			this.flag = false
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},500)
		}
	}
</script>

<style lang="scss">
	.goods_list{
		background-color: #eee;
	}
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
		color: #939393;
	}
</style>
