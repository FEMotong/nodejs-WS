let app = require('express')();
let WebSocket = require('ws');
let wss = new WebSocket.Server({ port: 8080 });
const port = 3000
wss.on('connection', function connection(ws) {
    console.log(`已经连接客户端!`);

    ws.on('message', function incoming(message) {
        console.log(`来自客户端信息： ${message}`);
    });

    ws.send(`WS发来的贺电！`);
});

app.listen(port ,() => console.log(`App listening on port ${port}......`));
