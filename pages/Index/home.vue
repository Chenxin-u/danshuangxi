<template>
	<view class="page">
		<!-- 导航 -->
		<u-navbar :is-back="false" title="环线旅行活动网" title-color="#fff" :background="navBackground"
			:border-bottom="false"></u-navbar>
		<!-- 主体 -->
		<view class="box">
			<view class="home_top">
				<!-- 搜索 -->
				<u-navbar :is-back="false" :is-fixed="false" :background="navBackground" :border-bottom="false">
					<view class="slot-wrap">
						<text class="iconfont icon-dizhi"></text>
						<text class="city-name">{{citydata}}</text>
					</view>
					<view class="nav-right" slot="right">
						<u-search placeholder="搜索你感兴趣的商品" v-model="keyword" :show-action="false"
							:input-style="inputStyle" search-icon-color="#999" color="#999"></u-search>
					</view>
				</u-navbar>
				<!-- 分类 -->
				<!-- <u-tabs-swiper ref="uTabs" :list="tabsList" :current="tabsCurrent" @change="tabsChange" :is-scroll="false" swiperWidth="750"></u-tabs-swiper> -->
				<v-tabs v-model="tabsCurrent" :tabs="tabsList" bgColor="#459FFC" @change="tabsChange"></v-tabs>
				<!-- 商品列表 -->
				<swiper style="height: 1000rpx;">
					<swiper-item  v-for="(item,index) in tabsList" :key="index">
						<dsx-goods-list :list="goodList" :height="height"></dsx-goods-list>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
</template>

<script>
	import vTabs from './components/v-tabs.vue'
	import dsxGoodsList from './components/dsx-goods-list.vue'
	export default {
		components: {
			vTabs,
			dsxGoodsList
		},
		data() {
			return {
				navBackground: {
					backgroundColor: '#459FFC',
				},
				inputStyle: {
					width: '400rpx'
				},
				citydata: '',
				keyword: '',
				tabsCurrent: 0,
				tabsList: [{
					name: '全部',
					src: '/static/images/sort.png'
				}, {
					name: '餐饮类',
					src: '/static/images/eat.png'
				}, {
					name: '酒店类',
					src: '/static/images/hotel.png'
				}, {
					name: '旅游类',
					src: '/static/images/trip.png'
				}],
				goodList: [{
					title: '【热门双酒店·2晚+3晚】下单立减300+迎春礼每单5人及以上仙...',
					tip: '三亚6日自由行',
					imgSrc: '/static/images/goodImgDemo.jpg',
					price: '39.00',
					originalPrice: '64.90',
					sellNum: '5600'
				}, {
					title: '【热门双酒店·2晚+3晚】下单立减300+迎春礼每单5人及以上仙...',
					tip: '三亚6日自由行',
					imgSrc: '/static/images/goodImgDemo.jpg',
					price: '39.00',
					originalPrice: '64.90',
					sellNum: '5600'
				},
				{
					title: '【热门双酒店·2晚+3晚】下单立减300+迎春礼每单5人及以上仙...',
					tip: '三亚6日自由行',
					imgSrc: '/static/images/goodImgDemo.jpg',
					price: '39.00',
					originalPrice: '64.90',
					sellNum: '5600'
				},
				{
					title: '【热门双酒店·2晚+3晚】下单立减300+迎春礼每单5人及以上仙...',
					tip: '三亚6日自由行',
					imgSrc: '/static/images/goodImgDemo.jpg',
					price: '39.00',
					originalPrice: '64.90',
					sellNum: '5600'
				},
				{
					title: '【热门双酒店·2晚+3晚】下单立减300+迎春礼每单5人及以上仙...',
					tip: '三亚6日自由行',
					imgSrc: '/static/images/goodImgDemo.jpg',
					price: '39.00',
					originalPrice: '64.90',
					sellNum: '5600'
				}],
				height: ''
			}
		},
		onLoad() {
			this.getLocation()
			this.getHeight()
		},
		methods: {
			//获取当前地址
			getLocation() {
				let that = this
				uni.getLocation({
					type: 'wgs84',
					success: function(res) {
						const latitude = res.latitude;
						const longitude = res.longitude;
						uni.request({
							header: {
								"Content-Type": "application/text"
							},
							//注意:这里的key值需要高德地图的 web服务生成的key  只有web服务才有逆地理编码
							url: 'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location=' +
								res.longitude + ',' + res.latitude +
								'&key=280802ed0116fef931dbcf5e7e9278d7&radius=1000&extensions=all',
							success(re) {
								// console.log(re)
								if (re.statusCode === 200) {
									that.citydata = re.data.regeocode.addressComponent.city
									that.citydata = that.citydata.slice(0, that.citydata.length - 1)
								} else {
									console.log("获取信息失败，请重试！")
								}
							}
						});
					}
				});
			},
			//tabsChange事件
			tabsChange(e){
				console.log(e)
			},
			//获取自适应高度
			getHeight(){
				let that = this
				uni.getSystemInfo({
					success:function(res){
						that.height = res.screenHeight*2-322
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f6f6f6;
	}

	.box {
		width: 750rpx;
		margin: auto;
		overflow: hidden;
	}

	.home_top {
		position: relative;
		width: 100%;
		height: auto;
	}

	.home_top:after {
		width: 140%;
		height: 400rpx;
		position: absolute;
		left: -20%;
		top: 0;
		z-index: -1;
		content: '';
		border-radius: 0 0 50% 50%;
		background: #459FFC;
	}

	.home_top /deep/ .u-navbar-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0 20rpx;
	}

	.slot-wrap {
		display: flex;
		align-items: center;
	}

	.icon-dizhi {
		font-size: 40rpx;
		color: #FFF;
	}

	.city-name {
		font-size: 30rpx;
		font-weight: bold;
		color: #fff;
	}

	.home_top /deep/ .u-status-bar {
		display: none;
	}
</style>
