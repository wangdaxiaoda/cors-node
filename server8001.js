const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    var file = __dirname + req.url;
    fs.readFile(file, function (err, data) {
        if (err) {
            res.setHeader('content-type', 'text/html;charset=utf-8');   //这里只考虑html情况，不做别的判断，如果不设置编码格式，会导致乱码
            res.writeHead(404);
            res.write('<h1>你查找的页面不存在</h1>');
        } else {
            res.writeHead(200);
            res.write(data);
        }
        res.end();
    })
}).listen(8001);
console.log('8001开启成功');