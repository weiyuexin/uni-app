<template>
	<view>
		<uni-data-checkbox multiple v-model="value" :localdata="range" @change="change"></uni-data-checkbox>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: [0, 2],
				range: [{
						"value": 0,
						"text": "篮球"
					}, {
						"value": 1,
						"text": "足球"
					},
					{
						"value": 2,
						"text": "游泳"
					}
				]
			}
		},
		methods: {
			change(e){
				console.log(e);
			}
		}
	}
</script>

<style>

</style>
