<template>
	<view id="myview">
		这是test组件{{num}}
		<view>这是父组件传递给子组件的参数：{{title}}</view>
		<button @click="sendNum">给父组件传值</button>
	</view>
	
</template>

<script>
	export default {
		name:"test",
		data() {
			return {
				num:3,
				intId:null
			};
		},
		methods:{
			sendNum(){
				console.log("给父组件传值");
				this.$emit('myEven',this.num) //给父组件传值，myEven事件在父组件中定义
			}
		},
		props:[ //接受父组件传递给子组件的参数
			"title"
		],
		beforeCreate() { //实例开始初始化之后
			console.log("实例已经开始初始化");
			console.log(this.num); //undefined
		},
		created() { //实例创建完成后调用
			console.log("实例创建完成");
			console.log(this.num); //3
			/* this.intId=setInterval(()=>{ //设置定时器，并将定时器的id赋值给intId
				console.log("定时器执行了");
			},1000) */
		},
		beforeMount() { //挂载开始之前
			// console.log("beforeMount",document.getElementById("myview"));
		},
		mounted() { //挂载完成之后
			// console.log("mounted",document.getElementById("myview"));
		},
		destroyed() { //销毁后
			console.log("组件销毁了");
			//clearInterval(this.intId) //销毁定时器
		}
	}
</script>

<style>

</style>