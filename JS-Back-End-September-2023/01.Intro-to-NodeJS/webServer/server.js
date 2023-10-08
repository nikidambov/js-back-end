const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    const { method, url } = req;
    console.log("Server is running");
    //console.log(url);
    //console.log(method);

    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    res.write('<h1>Hello from web server.</h1>');
    res.end();
});

server.listen(PORT);
console.log(`Serer is listening on port: ${PORT}...`);