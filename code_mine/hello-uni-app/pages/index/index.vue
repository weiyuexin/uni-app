<template>
	<view class="content">
		<!-- :title="title"  : 从父组件向子组件传递参数 -->
		<test v-if="flag" :title="title" @myEven="getNum"></test>
		<button type="primary" @click="changeTest">显示或隐藏test组件</button>
		<view>这是子组件传递过来的值：{{num}}</view>
		<testA></testA>
		<testB></testB>
		<view>
			<view>
				<uni-calendar ref="calendar" :insert="false" @confirm="confirm" />
				<button @click="open">打开日历</button>
			</view>
			<view v-if="year != 0">当前选择的时间是：{{fulldate}}</view>
		</view>
	</view>
</template>

<script>
	/* 引入组件 */
	import test from '../../components/test.vue'
	import testA from '../../components/a.vue'
	import testB from '../../components/b.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				flag: true,
				num: 0,
				year:0,
				mouth:0,
				day:0,
				fulldate:""
			}
		},
		methods: {
			changeTest() {
				this.flag = !this.flag
			},
			getNum(num) {
				console.log("子组件传递过来的值是：" + num);
				this.num = num
			},
			open() { //点击打开日历
				this.$refs.calendar.open();
			},
			confirm(data) { //选择日期后触发
				console.log(data);
				this.fulldate = data.fulldate
				this.year = data.year
				console.log(this.fulldate);
			}
		},
		components: { //注册组件
			test: test, //键和值一样时可以只写键test
			testA,
			testB
		},
		/* 页面生命周期 */
		onLoad(options) { //options是上一个页面传递过来的参数
			console.log("页面加载了")
			console.log(options);
		},
		onShow() {
			console.log('页面显示了');
		},
		onReady() {
			console.log("页面初次渲染完成了");
		},
		onHide() {
			console.log("页面隐藏了");
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
