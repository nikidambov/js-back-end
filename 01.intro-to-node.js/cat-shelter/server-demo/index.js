const http = require('http');

const router = require('./router');
const { html } = require('./util');

const homePage = `
<h1>home</h1>
<p>hello world!</p>`;

const aboutPage = `
<h1>about us</h1>
<p>contact information</p>`;


const catalogPage = `
<h1>catalog</h1>
<p>list of items</p>`;

const server = http.createServer(router.main);

router.routes['/'] = homeController;
router.routes['/about'] = aboutController;
router.routes['/catalog'] = catalogController;

server.listen(3000);

function homeController(req, res) {
    res.write(html(homePage));
    res.end();
}

function aboutController(req, res) {
    res.write(html(aboutPage));
    res.end();
}


function catalogController(req, res) {
    res.write(html(catalogPage));
    res.end();
}
