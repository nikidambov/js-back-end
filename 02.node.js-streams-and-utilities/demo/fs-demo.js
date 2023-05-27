const fs = require('fs');

/*
const file = fs.readFileSync('./file.txt');
console.log(file.toString());
*/

/*
fs.readFile('./file.txt', (err, data) => {
    console.log(data.toString());
});
*/

/*
async function start() {
    const data = await fs.readFile('./file.txt');
    console.log(data.toString());
}

start();
*/

/*
const list = fs.readdirSync('./');
console.log(list);
*/

/*
fs.writeFileSync('./output.txt', 'Hello again!', 'utf8');
*/

/*
const data = JSON.parse(fs.readFileSync('./data.json'));
data.price++;
fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
*/

fs.readFile('./data.json', (err, dataAsText) => {
    const data = JSON.parse(dataAsText);
    data.price++;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), (err) => {
        console.log('write complete');
    });
})


