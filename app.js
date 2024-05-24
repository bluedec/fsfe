const http = require('http')

http.createServer((req, res) => {
	res.write("Hiii! This is my first server in Node!")
	console.log(req);
	res.end()
}).listen(3000)

console.log("Listening on port 3000!");
