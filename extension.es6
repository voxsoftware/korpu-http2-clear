require(__dirname + "/main")
var v= core.org.voxsoftware.Korpu.Extensions.Http2Clear
var Handler

//  ASYNC ...
export default function(e){

	if(!Handler)
		Handler= new v.Handler()


	return Handler.handle(e)
}