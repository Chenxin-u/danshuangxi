<template>
	<view >
		<scroll-view :scroll-y="true" class="goods-list" :style="'height:'+height+'rpx;'">
			<view class="box" v-for="(good,index) in list" :key="index">
				<!-- 编辑 -->
				<view class="edit-box" v-if="showEdit">
					<dsx-checkbox @change="checkboxChange(good)"></dsx-checkbox>
				</view>
				<!-- 商品 -->
				<view class="list-item">
					<image :src="good.imgSrc" class="good-img"></image>
					<view class="img-tip">{{good.tip}}</view>
					<view class="good-title">{{good.title}}</view>
					<view class="good-bottom">
						<view class="good-price">
							<view class="price">￥<text>{{good.price}}</text></view>
							<view class="original-price">￥<text>{{good.originalPrice}}</text></view>
							<view class="sellnum" v-if="!showEdit">已售<text>{{good.sellNum}}</text></view>
						</view>
						<view class="good-btns">
							<view class="share-btn">分享返现</view>
							<view class="buy-btn">立即购买</view>
						</view>
					</view>
				</view>
			</view>
			<view class="empty-box"></view>
		</scroll-view>
	</view>
</template>

<script>
	/**
	 * v-tabs
	 * @property {Array} list 列表    example:{title: '',tip: '',imgSrc: '',price: '',originalPrice: '',sellNum: ''}
	 * @property {Boolean} showEdit 显示编辑按钮
	 * @property {String} height 高度
	 *
	 * @event {Function(good)} checkboxChange checkbox改变事件
	 */
	import dsxCheckbox from './dsx-checkbox.vue'
	export default {
		components: {
			dsxCheckbox
		},
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			showEdit: {
				type: Boolean,
				default () {
					return false
				}
			},
			height: {
				type: String,
				default () {
					return '500'
				}
			}
		},
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			checkboxChange(data){
				 this.$emit('checkboxChange', data)
			}
		}
	}
</script>

<style lang="scss">
	.goods-list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 20rpx;
	}

	.box {
		display: flex;
		min-width: 800rpx;
		margin-top: 20rpx;
	}

	.edit-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80rpx;
		transform: translateX(10rpx);
	}

	.list-item {
		position: relative;
		left: 18rpx;
		width: 714rpx;
		min-width: 714rpx;
		height: 370rpx;
		background-color: #fff;
		border-radius: 10rpx;
		overflow: hidden;
	}

	.good-img {
		width: 100%;
		height: 240rpx;
		background-color: #000;
	}

	.img-tip {
		position: absolute;
		top: 173rpx;
		width: 100%;
		height: 67rpx;
		padding: 18rpx 12rpx 14rpx;
		font-size: 35rpx;
		font-weight: bold;
		color: #fff;
		line-height: 35rpx;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0.1) 100%);
	}

	.good-title {
		width: 630rpx;
		margin: 10rpx 10rpx;
		font-size: 24rpx;
		color: #666666;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.good-bottom {
		display: flex;
		align-items: center;
		width: 100%;
		height: 60rpx;
		padding: 0 10rpx;
	}

	.good-price {
		flex: 1;
		display: flex;
		align-items: baseline;
		height: 50rpx;
		font-size: 24rpx;
		color: #999999;

		.price,
		.original-price,
		.sellnum {
			margin-left: 10rpx;
		}

		.price {
			color: #FFA723;

			text {
				font-size: 39rpx;
			}
		}

		.original-price {
			text-decoration: line-through;
		}

		.sellnum {
			text {
				margin-left: 10rpx;
			}
		}
	}

	.good-btns {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 280rpx;
		height: 56rpx;

		.share-btn,
		.buy-btn {
			width: 50%;
			height: 100%;
			text-align: center;
			border: 1px solid;
			line-height: 55rpx;
			font-size: 24rpx;
			font-weight: bold;
		}

		.share-btn {
			border-right: none;
			border-color: #FFA723;
			color: #FFA723;
			border-top-left-radius: 28rpx;
			border-bottom-left-radius: 28rpx;
		}

		.buy-btn {
			border-color: #67B2FF;
			color: #67B2FF;
			border-top-right-radius: 28rpx;
			border-bottom-right-radius: 28rpx;
		}
	}
	.empty-box{
		width: 100%;
		height: 50rpx;
	}
</style>
