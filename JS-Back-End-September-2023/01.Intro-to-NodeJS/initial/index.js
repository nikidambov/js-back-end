//const is = require("is");
//console.log(is.even(3));

const querystring = require("querystring");

const myURL = new URL("https://localhost:3000/somePath?query=year=2023");
const qs = querystring.parse(myURL.search);

console.log(qs);