<script>
	export default {
		onLaunch: function() {
			let token = uni.getStorageSync('token') || '';
			if(token){
				uni.reLaunch({
					url:'/pages/index/home'
				})
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import 'uview-ui/index.scss';
	@import './static/css/common.css';
</style>
