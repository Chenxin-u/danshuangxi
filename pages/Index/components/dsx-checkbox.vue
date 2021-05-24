<template>
	<view class="page" @click="change">
		<view class="dsx-checkbox" v-if="!checked"></view>
		<view class="iconfont icon-check" v-if="checked"></view>
	</view>
</template>

<script>
	export default {
		props: {
			
		},
		data() {
			return {
				checked: false
			}
		},
		onLoad() {

		},
		methods: {
			change(){
				this.checked = !this.checked
				 this.$emit('change', 'isChange')
			}
		}
	}
</script>

<style lang="scss">
.dsx-checkbox{
	width: 40rpx;
	height: 40rpx;
	background: #c2c3c6;
	border: 2px solid #c2c3c6;
	border-radius: 50%;
}
.icon-check{
	width: 40rpx;
	height: 40rpx;
	margin-top: -1px;
	font-size: 40rpx;
	color: #459ffc;
}
</style>
