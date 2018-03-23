
const http = require('http');
const fs = require('fs');
const path = require('path')
const ejs = require('ejs');
const port = 6008;
const {promisify} = require('util');

const requestHandler = (request, response) => {

    if (request.method == 'GET') {

        const renderTemplate = promisify(ejs.renderFile).bind(ejs);

        if (request.url.indexOf('.') != -1) {

            const readFileAsync = promisify(fs.readFile);
            const fileName = __dirname + request.url;

            readFileAsync(fileName, {encoding: 'utf8'})
                .then((file) => {
                    let contentType = 'text/plain';
                    switch (path.extname(fileName).toLowerCase()) {
                        case '.css':
                            contentType = 'text/css';
                            break;
                        case '.js':
                            contentType = 'text/javascript';
                            break;
                        case '.ico':
                            contentType = 'image/x-icon';
                            break;
                        case '.jpg':
                        case '.jpeg':
                            contentType = 'image/jpeg';
                            break;
                        case '.png':
                            contentType = 'image/png';
                            break;
                    }
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(file);
                })
                .catch((err) => {
                    console.error(`Ошибка сервера ${err}`);
                    response.statusCode = 404;
                    response.end('=(');
                });
        } else {

            renderTemplate(`${__dirname}/template.ejs`)
                .then((html) => {
                    response.writeHead(200, { 'Content-Type': 'text/html' });
                    response.end(html);
                })
                .catch((err) => {
                    console.error(err.stack);
                    response.statusCode = 502;
                    response.end('=(');
                });
        }

    } else {

        // POST
        let body = '';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {

            fs.writeFile('logo.jpg', new Buffer(body, "base64"), (err) => {
                if (err) {
                    console.error(err.stack);
                    response.statusCode = 502;
                    response.end('=(');
                } else {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end('post received');
                }
            });

            //
            // fs.writeFile('logo.jpg', body, 'binary', function(err){
            //     if (err) {
            //         console.error(err.stack);
            //         response.statusCode = 502;
            //         response.end('=(');
            //     } else {
            //         response.writeHead(200, {'Content-Type': 'text/html'});
            //         response.end('post received');
            //     }
            // });

            // const streamIn = fs.createReadStream(body);
            // const streamOut = fs.createWriteStream(`${__dirname}/file.jpg`);
            // streamIn.pipe(streamOut);
            // streamOut.on('finish', function(){
            //     response.writeHead(200, {'Content-Type': 'text/html'});
            //     response.end('post received');
            // });

            // const fileBuffer = fs.readFileSync(body);
            // const path = `${__dirname}/file.jpg`;
            // console.log(`path ${path}`);
            // fs.writeFile(path, fileBuffer, function(err){
            //     console.error(err.stack);
            //     response.writeHead(200, {'Content-Type': 'text/html'});
            //     response.end('post received');
            // });
        });
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {

    if (err) {
        return console.error(`Ошибка сервера ${err}`);
    }

    console.log(`Вишу на порту ${port}`);
});