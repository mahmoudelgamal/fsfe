const http = require('http')

http.createServer((req, res)=>{
 res.write("On the way to be fill stach engineer")
 res.end
}).listen(3000)

console.log("server is listening on port 3000")
