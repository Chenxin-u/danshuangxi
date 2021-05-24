import https from "./https"

class Address extends https{
    getAddress(){//获取用户地址列表
        return this.request.post("/member/api_ship_address/addressList", {
           'proof': uni.getStorageSync('token'),
        });
    }
    editAddress(form,type){//添加地址-编辑地址
		form = Object.assign(form,{'proof': uni.getStorageSync('token')})
		if(type){
			return this.request.post("/member/api_ship_address/editAddress", form,true);
		}else{
			return this.request.post("/member/api_ship_address/addAddress", form,true);
		}
    }
	delAddress(id){//删除地址
	    return this.request.post("/member/api_ship_address/delAddress", {
	       'proof': uni.getStorageSync('token'),id
	    });
	}
	getAreainfo(){//获取所有省市区
	    return this.request.post("/address/api_index/getAreainfo");
	}
}
export default Address
