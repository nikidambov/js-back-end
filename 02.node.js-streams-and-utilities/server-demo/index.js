const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if(url.pathname == '/'){
        res.writeHead(301, {
            Location: 'index.html'
        });
        res.end();
    } else if (url.pathname.slice(-5) == '.html') {
        fs.createReadStream(`./static${url.pathname}`).pipe(res);
    } else if (url.pathname == '/favicon.ico') {
        fs.createReadStream('./static/favicon.ico').pipe(res);
    }
    
}).listen(3000);