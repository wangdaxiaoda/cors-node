# cors-node
Node Server+CORS

使用Node构建服务器，设置不同的端口，实现CORS

服务器：
------
```javascript
http.createServer(function (req, res) {}).listen();
```

异域请求数据
----------
```javascript
//1
var xmlReq = new XMLHttpRequest();
xmlReq.onreadystatechange = function () {
    if (xmlReq.readyState == 4 && xmlReq.status == 200) {
        $('#myDiv').html(xmlReq.responseText);
    }
}
xmlReq.open('get', 'http://127.0.0.1:8002', true);
xmlReq.send();

//2
$.get('http://127.0.0.1:8003', function (data, status) {
    $('#myDiv').html(data + '!!!' + status);
});
```

服务器允许所有域名请求
-------------
```javascript
res.writeHead(200, {"Access-Control-Allow-Origin": "*" })
```

服务器允许特定域名请求
---------
```javascript
res.writeHead(200, {"Access-Control-Allow-Origin": "http://127.0.0.1:8001"})
```