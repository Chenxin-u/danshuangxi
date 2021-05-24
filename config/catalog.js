export default {
	network: ["Address"], //安装模块 示例:["Member", "Goods", "Order", "Address"]
	catalog: [ //模块目录
		{name:'Address',sign:'地址管理',desc:'提供地址列表'},
		{name:'Audit',sign:'审核管理',desc:'审核'},
		{name:'Chat',sign:'聊天管理',desc:'即时模块'},
		{name:'Comment',sign:'评论管理',desc:'管理评论'},
		{name:'Contract',sign:'合同管理',desc:'合同制作'},
		{name:'Feedback',sign:'意见反馈管理',desc:'意见反馈信息管理'},
		{name:'Freight',sign:'运费管理',desc:'管理计算物流运费'},
		{name:'Fund',sign:'资金管理',desc:'管理订单支付流程'},
		{name:'Goods',sign:'商品管理',desc:'商品管理'},
		{name:'Log',sign:'日志管理',desc:'用于记录系统操作日志,可自定义监听某个操作并自定义记录日志信息'},
		{name:'Logistics',sign:'物流管理',desc:'包含物流公司信息和配置的基础模块'},
		{name:'Member',sign:'会员管理',desc:'会员管理基础模块'},
		{name:'MemberLogin',sign:'会员登录注册管理',desc:'模块登录注册管理基础模块'},
		{name:'Message',sign:'消息管理',desc:'发送消息'},
		{name:'ModuleConfig',sign:'应用配置管理',desc:'应用配置管理'},
		{name:'Order',sign:'订单管理',desc:'无'},
		{name:'Pay',sign:'支付管理',desc:'支付管理承载市场上各种支付工具的基础模块'},
		{name:'Redis',sign:'序列管理',desc:'redis序列'},
		{name:'SiteConfig',sign:'站点配置管理',desc:'用于站点的常规配置和其他模块配置 , 可以自定义关联模块配置到站点配置中进行管理'},
		{name:'Sms',sign:'短信发送管理',desc:'用于对接各种短信服务商的基础模块'},
		{name:'Store',sign:'店铺管理',desc:'店铺管理'},
		{name:'Workorder',sign:'工单管理',desc:'上级部门下达任务，下级部门领受任务的依据'},
	]
}
