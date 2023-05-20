const util = require('./util');
const fs = require('fs');

util.print('hello world');
util.printFancy('hello world');

fs.writeFileSync('./output.txt', 'Hello World!');
