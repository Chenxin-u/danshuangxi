import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import https from './network/request.js'


const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}
Vue.prototype.$api = {
	prePage
};

Vue.use(uView);
Vue.prototype.$https = new https(Vue.prototype.$u);
Vue.config.productionTip = false

// 封装跳转路由，type--1:navigateTo 普通跳转, 2:redirectTo 关闭当前页跳转, 3:reLaunch 关闭所有页跳转, 4:switchTab 底部导航跳转, 5:返回上一页
Vue.prototype.zyroute=function(type,value){
	if(type==1){
		uni.navigateTo({url:value,})
	}else if(type==2){
		uni.redirectTo({url:value,})
	}else if(type==3){
		uni.reLaunch({url:value,})
	}else if(type==4){
		uni.switchTab({url:value,})
	}else if(type==5){
		uni.navigateBack({delta: 1})
	}
}

App.mpType = 'app'
// Vue.prototype.$bus = new Vue();

const app = new Vue({
    ...App
})
app.$mount()
