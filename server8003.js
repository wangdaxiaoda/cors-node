const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    res.writeHead(200, {
        "connent-type": "text/plain",
        "access-control-allow-origin": "http://127.0.0.1:8001" //只允许该域名访问,可以自己在构建一个服务器进行测试
    })
    res.write("这里是8003");
    res.end();
}).listen(8003);
console.log('8003开启成功');