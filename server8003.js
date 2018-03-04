var http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    var file = __dirname + req.url;
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHead(404)
            res.write('<h1>你查找的页面不存在</h1>');
        } else {
            if (req.url != 'index') {
                res.writeHead(200, {
                    "Connent-Type": "text/plain",
                    "Access-Control-Allow-Origin":"http://127.0.0.1:8001"
                })
                res.write(data);
            }
        }
        res.end();
    })
}).listen(8003);
console.log('8003开启成功');