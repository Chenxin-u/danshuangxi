module.exports = {
	"easycom": {
		"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
	},
	"globalStyle": {
		navigationBarTextStyle: "white",
		navigationBarTitleText: "但双喜商城",
		navigationBarBackgroundColor: "#459FFC",
		backgroundColor: "#459FFC"
	},
	"tabBar": {
		color: "#CCCCCC",
		selectedColor: "#459FFC",
		borderStyle: "white",
		backgroundColor: "#ffffff",
		height: '60px',
		list: [{
			"pagePath": "pages/Index/home",
			"iconPath": "static/tabbar/home.png",
			"selectedIconPath": "static/tabbar/home-active.png",
			"text": "爆款特价"
		},{
			"pagePath": "pages/Index/sort",
			"iconPath": "static/tabbar/sort.png",
			"selectedIconPath": "static/tabbar/sort-active.png",
			"text": "分类"
		},{
			"pagePath": "pages/Index/my",
			"iconPath": "static/tabbar/my.png",
			"selectedIconPath": "static/tabbar/my-active.png",
			"text": "我的"
		}]

	}
}
