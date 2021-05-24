import config from "@/config";
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;

class https{
    request;
    constructor(request){
        this.request = request;
        this.config = Object.assign(config.requestConfig, {baseUrl});
        this._setConfig()
        this._setInterceptorRequest();
        this._setInterceptorResponse();
    }
    _setConfig(){
        this.request.http.setConfig(this.config);
    }
    _setInterceptorRequest(){
        this.request.http.interceptor.request = (config)=>{
            // config.header.Token = 'xxxxxx';
			this.postMsg = config
            // // 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
            // if (config.url == '/user/login') config.header.noToken = true;
            // // 最后需要将config进行return
            return config;
        }
    }
 	async _getProof(proof,refresh_token,refresh = "20200707"){//无痛刷新token
		let msg = this.postMsg;	
	    let res = await this.request.http.request({url:"/member/api_index/refreshToken",method: 'POST', data:{ proof, refresh_token, refresh,}, header:{}}, false)
		let newProof = res.token;
		uni.setStorageSync('token',res.token)
		msg.data.proof = newProof;
		let res_data = await this.request.http.request({url:msg.url,method: 'POST', data:msg.data, header:{}}, false)
		return res_data;
	}
    _setInterceptorResponse() {
        this.request.http.interceptor.response =  (response, isToast)  => {
            if(response.statusCode == 200)
            {
                let res = response.data;
                if (res.code == 200) {
                    // res为服务端返回值，可能有code，result等字段
                    // 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
                    // 如果配置了originalData为true，请留意这里的返回值
                    if(isToast)
                        this.request.toast(res.message);
                    return res.data;
                }else if (res.code == 20014) {//token过期，需要请求接口刷新token，再重新请求上次的接口，实现页面无缝衔接,token有效期为2小时
					let data =  this._getProof(uni.getStorageSync('token'),uni.getStorageSync('refresh_token'));
					return data;
				}else if (res.code == 20019) {//refresh_token过期，需要重新登录获取，refresh_token有效期为30天
					uni.showModal({
					    title: '提示', 
					    content: '身份过期，请重新登录',
						showCancel:false,
					    success: function (res) {
					        if (res.confirm) {
								uni.reLaunch({
									url:'/pages/login/login'
								})
					        }
					    }
					});
				}
				else if (res.status == 'error') {
                    this.request.toast(res.message);
                    return false;
                } else {
                    //不是错误，并且code 不是200或者为空
                    //则需要自行处理的code码
                    return res
                }
            }
            else
            {
                this.request.toast("网络异常，请稍后重试");
                return false;
            }

        }
    }
}
export default https
