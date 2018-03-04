var http = require('http');
const fs = require('fs');
var documentRoot = 'D:/studyweb/cors+node';
http.createServer(function (req, res) {
    console.log(req.url);
    var file = documentRoot + req.url;
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHead(404)
            res.write('<h1>你查找的页面不存在</h1>');
            res.end();
        } else {
            res.writeHead(200);
            console.log('200'+data);
            res.write(data);
            res.end();
        }
    })
}).listen(8001);
console.log('8001开启成功');