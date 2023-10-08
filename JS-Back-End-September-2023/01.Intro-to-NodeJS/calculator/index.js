const calculateDefaultExport = require("./calculator-default-export");
const { sum, divide, multiply, subtract } = require("./calculator-named-export");

//console.log(calculateDefaultExport.sum(1, 2));
//console.log(sum(1, 2));
console.log(globalThis === global);