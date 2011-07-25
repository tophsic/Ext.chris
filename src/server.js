var http    = require('http');
var fs      = require('fs');
var path    = require('path');

http.createServer(function (request, response) {
    var startTime = new Date().getTime();
    response.writeHead(200, {'Content-Type': 'text/html'});

    var url = 'examples/index.html';
    request_url = request.url.replace(/^\//, '');
    console.info(request_url);
    if (path.existsSync(request_url))
        url = request_url;
    fs.readFile(url, function (err, data) {
        url = request.url;
        if (err) throw err;
        response.write(data);
        response.end('');
    });

    var elapsedTime = new Date().getTime() - startTime;
    console.log("Elapsed time (in ms): " + elapsedTime);
}).listen(process.env.C9_PORT);

console.log('Server running at http://127.0.0.1:' + process.env.C9_PORT);