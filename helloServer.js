//node helloServer.js will start the server
const http = require('http'); 
const server = http.createServer();
const hostname = '127.0.0.1';
const port = 1337;

/*server.on('requests',(req, res) => { 
    res.writeHead(200, { 'Content-Type': 'text/plain' }); 
    res.end('Hello Labious\n'); 
    });

    server.listen(port, hostname, () => { 
        console.log(`Server running at http://${hostname}:${port}/`);
        });*/

http.createServer((req, res) => { 
res.writeHead(200, { 'Content-Type': 'text/plain' }); 
res.end('Hello Labious\n'); 
}).listen(port, hostname, () => { 
console.log(`Server running at http://${hostname}:${port}/`);
});