const http = require('http');
const fs = require('fs');
const path = require('path');
const PUBLIC_DIR = path.join(__dirname, '../public');
const {PORT = 8000} = process.env;

function htmlReaderFile(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIR, htmlFileName);
    const readHtmlFile = fs.readFileSync(htmlFilePath, 'utf-8');

    return readHtmlFile;
}

// Request response handler
function onRequest(request, response) {
    switch (request.url) {
        case "/":
            response.writeHead(200);
            response.end(htmlReaderFile('index.html'));
            return;

        case "/about":
            response.writeHead(200);
            response.end(htmlReaderFile('about.html'));
            return;

        case "/profile":
            response.writeHead(200);
            response.end(htmlReaderFile('profile.html'));
            return;

        case "/contact-us":
            response.writeHead(200);
            response.end(htmlReaderFile('contact-us.html'));
            return;

        default:
            response.writeHead(404);
            response.end(htmlReaderFile('404.html'));
            return;
    }

    // const htmlFilePath = path.join(PUBLIC_DIR, 'index.html');
    // const readHtmlFile = fs.readFileSync(htmlFilePath, 'utf-8');

    // response.setHeader('Content-Type', 'text/html');
    // response.writeHead(200);
    // response.end(readHtmlFile);

}

// Server instance
const server = http.createServer(onRequest);

// Listen portnya
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at localhost:${PORT}`);
})