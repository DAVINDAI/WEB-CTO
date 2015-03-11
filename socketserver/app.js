/**
 * @file Describe the file
 * @author daihongtao
 */


var net = require('net');

var server = net.createServer(function (c) { //'connection' listener
    console.log('client connected');

    c.on('data', function (data) {
        console.log(data);
        console.log(data.toString());
        setInterval(function(){
            c.write('nihao\r\n' + Math.floor(new Date() / 1000));
        }, 1000);
    })
    c.on('end', function () {
        console.log('client disconnected');
    });
    c.write('hello\r\n');
    // c.pipe(c);
});
server.listen(8124, function () { //'listening' listener
    console.log('server bound');
});