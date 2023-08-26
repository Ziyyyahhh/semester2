const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

function req(request, response) {
    const base = url.parse(request.url);
    const pathname = base.pathname;
    const fileName = '.' + pathname;
    console.log(fileName);
    fs.readFile(fileName, function (err, data) {
        if (err) {
            response.write('<h1>404</h1>');
            return response.end();
        }
        response.write(data);
        return response.end();
    })
}
http.createServer(req).listen(4097);
console.log('Server started, http://localhost:4097');


