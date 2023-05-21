const { html } = require('../util');

const homePage = `
<h1>home</h1>
<p>hello world!</p>`;

const aboutPage = `
<h1>about us</h1>
<p>contact information</p>`;

function homeController(req, res) {
    res.write(html(homePage));
    res.end();
}

function aboutController(req, res) {
    res.write(html(aboutPage));
    res.end();
}

module.exports = {
    homeController,
    aboutController,
};