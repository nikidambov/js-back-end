const fs = require("fs");

const text = "NodeJS";
fs.writeFile('./output.txt', text, 'utf-8', (err) => {
    if(err) {
        console.log("Unsucsessful file saving!");
    }

    console.log("Sucsessfully saved file!");
});