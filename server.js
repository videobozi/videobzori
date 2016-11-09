var http = require('http')
;
 
var server = http.createServer(function(req, res) {
    res.writeHead(200);
	
	res.write("<h1>videobzori.ru</h1>");
	res.write("<h3>" + new Date() + "</h3>");

    res.end();
});
 
var port = 80;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});
