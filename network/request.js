import config from "@/config";
class request{
	#request
	constructor(request){
		this.config = config["components"] || [];
		this.#request = request;
		this.createRequest();
	}
	async createRequest(){
		let data;
		let index;
		for(index in this.config)
		{
			data = await require("./"+this.config[index]);
			this[this.config[index]] = new data["default"](this.#request);
		}
	}
}

export default request
