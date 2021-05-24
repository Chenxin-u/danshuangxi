//验证码倒计时,需要在页面中设置data值:{isshow:false,time:0,smsText:'获取验证码',}
export const zysms = function(){
	this.isshow = true;
	this.time=30;
	// this.smsText=(this.time)+"秒后获取";
	clearInterval(this.timer);
	this.timer=setInterval(() => {
		if(this.time<=0){
			this.smsText="重新获取";
			this.isshow = false;
			clearInterval(this.timer);
		}else{
			// console.log(this.time)
			this.smsText=this.time+"秒后获取";
			this.time--;
		}
	},1000);
}

/**
 * 时间戳转时间
 * @param oldDate 时间戳或者时间变量
 * @param fmt 格式
 * @returns {*}
 */
export const  formatDate = function(oldDate, fmt) {
    let date = new Date()
    if (typeof oldDate === 'string' || typeof oldDate === 'number') {
        if(typeof oldDate === 'number')
            oldDate = oldDate.toString();
        if(oldDate.length <=13)
            oldDate += '000';
        date = new Date(+oldDate)
    } else {
        date = oldDate
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))  }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()  }
    function padLeftZero (str) {
        return ('00' + str).substr(str.length)
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt
};

/**
 * 深拷贝
 * @param target
 * @returns {{}}
 */
export const deepClone = function (target) {  //深拷贝
    // 定义一个变量
    var result;
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
        // 如果是一个数组的话
        if (Array.isArray(target)) {
            result = []; // 将result赋值为一个数组，并且执行遍历
            for (let i in target) {
                // 递归克隆数组中的每一项
                result.push(deepClone(target[i]))
            }
            // 判断如果当前的值是null的话；直接赋值为null
        } else if(target===null) {
            result = null;
            // 判断如果当前的值是一个RegExp对象的话，直接赋值
        } else if(target.constructor===RegExp){
            result = target;
        }else {
            // 否则是普通对象，直接for in循环，递归赋值对象的所有值
            result = {};
            for (let i in target) {
                result[i] = deepClone(target[i]);
            }
        }
        // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
        result = target;
    }
    // 返回最终结果
    return result;
};

export const getData = (data1, data2)=>{
    let index;
    for(index in data1)
    {
        data1[index] = data2.hasOwnProperty(index)?data2[index] : data1[index];
    }
}

export const clearData = (data)=>{
    for(let index in data)
    {
        data[index] = "";
    }
}

