import http from 'http';

const host = 'localhost';
const port = 8000;

const server = http.createServer((request, response) => {
    if (request.method === 'POST') {
        let body = '';

        request.on('data', (chunk) => {
            body += chunk.toString();
        });

        request.on('end', () => { 
            console.log(body);
        });

        response.writeHead(201, { 'Content-Type': 'text/plain' });
        response.end('ok');
    } else {
        response.writeHead(200);
        response.end();
    }
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});