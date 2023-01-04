<template>
	<view>
		<view class="news_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image src="https://img.weiyuexin.top/img/picgo/2022/12/15/20221215002719.jpg"></image>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"news-item",
		props:['list'],
		filters:{ //使用过滤器格式化日期
			formatDate(date){
				console.log(date);
				const ndate = new Date(date);
				const year = ndate.getFullYear()
				const mouth = ndate.getMonth().toString().padStart(2,0)
				const day = ndate.getDay().toString().padStart(2,0)
				console.log(year,mouth,day);
				return year+'-'+mouth+'-'+day
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			navigator(id){ //调用父组件的方法，实现新闻详情跳转
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item{
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image{
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		.right{
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-size: 30rpx;
				
			}
			.info{
				font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}
		}
	}
</style>