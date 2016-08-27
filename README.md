# korpu-http2-clear

Extensión para korpu que permite quitar los headers del módulo HTTP2 de apache

Cuando el módulo HTTP2 está activado en Apache, el servidor devuelve un Header Connection con el valor: Upgrade, keep-alive. Algunos sistemas de request son incompatibles con esto, puesto que toman como si fuera una conexión websocket, más concretamente jxcore





