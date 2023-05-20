const { html } = require('./util');

const defaultPage = `
<h1>404 not found</h1>
<p>the resource you requested cannot be found</p>`;

const routes = {};

function main(req, res) {
    console.log('>>>', req.method, req.url);

    const url = new URL(req.url, `http://${req.headers.host}`);

    const handler = match(url);

    if (typeof handler == 'function'){
        handler(req, res);
    } else {
        defaultController(req, res);
    }
}

function match(url) {
    const handler = routes[url.pathname];
    return handler;
}

function defaultController(req, res) {
    res.write(html(defaultPage));
    res.end();
}

module.exports = {
    main,
    routes,
};