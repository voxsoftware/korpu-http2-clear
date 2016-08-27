
var v= core.org.voxsoftware.Korpu.Extensions.Http2Clear
class Handler{
	
	handle(ev){

		// Lo que se debe hacer es sencillo, debido a las facilidades que ofrece 
		// vox-core, simplemente se evita que se mande en el header Connection 
		// la palabra Upgrade 

		//var req=ev.proxy.getChannelRequest(ev.request)
		ev.request.response.on("setheader", function(e){

			var y
			if(e.arguments[0]){
				if(e.arguments[0].toUpperCase()=="CONNECTION"){
					y= e.arguments[1].toUpperCase().indexOf("UPGRADE")
					if(y>=0)
						e.arguments[1]=e.arguments[1].substring(0,y)+e.arguments[1].substring(y+7)
					if(e.arguments[1][0]==",")
						e.arguments[1]= e.arguments[1].substring(1).trim()
				}
				else if(e.arguments[0].toUpperCase()==="UPGRADE")
					e.arguments[0]=undefined 
			}
		})
		ev.request.continue()
	}

	// Código de ejemplo para configurar el autoresponder...
	static  config(){

		return {

			"match":[
				/http:\/\/google.com\/\S*/i
			],
			"active": true,
			"id": "org.voxsoftware.http2clear",
			"require": "korpu-http2-clear/extension"

		}

	}

}

export default Handler