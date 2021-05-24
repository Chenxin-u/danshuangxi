import catalog from './catalog.js'

export default {
    baseUrl:{
        dev:"http://new.6xq.cn/plugin",  //调试地址
        pro:"http://new.6xq.cn/plugin"  //正式环境地址
    },
    requestConfig:{
        dataType: 'json',
        showLoading: true, // 是否显示请求中的loading
        loadingText: '请求中...', // 请求loading中的文字提示
        loadingTime: 1000, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
        originalData: true, // 是否在拦截器中返回服务端的原始数据
        loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
        cache: false, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
        header: {
            "Content-Type":"application/json;charset=UTF-8"
        },
    },
    uploadImgUrl :"http://new.6xq.cn/plugin/task/api_index/add_photo",
    homeName: 'home',
    components: catalog.network,
	postMsg:{},
}
