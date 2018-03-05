const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    // 下面这段代码是最简单的实现异域请求的方法
    res.writeHead(200, {
        "Connent-Type": "text/plain",
        "Access-Control-Allow-Origin": "*"  //允许所有域名访问
    })
    res.write("这里是8002");
    res.end();
}).listen(8002);
console.log('8002开启成功');