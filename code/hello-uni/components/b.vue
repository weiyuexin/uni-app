<template>
	<view>
		这是b组件的数据:{{num}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0
			};
		},
		created(){
			uni.$on('updateNum',num=>{
				this.num+=num
			})
		}
	}
</script>

<style>

</style>
