var http    = require('http');
var fs      = require('fs');

http.createServer(function (request, response) {
        var startTime = new Date().getTime();
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('examples/index.html', function (err, data) {
        if (err) throw err;
        response.write(data);
        response.end('');
    });
/*    fs.stat('./', function(err, stats) {
        console.log(stats);
        console.log(stats.isDirectory());
    });
    fs.readdir('./', function(err, files) {
        console.log(files);
    });*/
    var elapsedTime = new Date().getTime() - startTime;
    console.log("Elapsed time (in ms): " + elapsedTime);
}).listen(process.env.C9_PORT);

console.log('Server running at http://127.0.0.1:' + process.env.C9_PORT);