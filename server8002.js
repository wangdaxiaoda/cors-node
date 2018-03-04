var http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    console.log(req.url);
    // if (req.url != 'index') {
    //     res.writeHead(200, {
    //         "Connent-Type": "text/plain",
    //         "Access-Control-Allow-Origin": "*"
    //     })
    //     res.write("im wdxd");
    //     res.end();
    // }
    var file = __dirname + req.url;
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHead(404)
            res.write('<h1>你查找的页面不存在</h1>');
        } else {
            if (req.url != 'index') {
                res.writeHead(200, {
                    "Connent-Type": "text/plain",
                    "Access-Control-Allow-Origin": "*"
                })
                res.write(data);
            }
        }
        res.end();
    })
}).listen(8002);
console.log('8002开启成功');