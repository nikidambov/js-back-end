function print(text) {
    console.log('>>> ' + text)
}

function printFancy(text){
    console.log('>>> ' + text + ' <<<');
}

module.exports = {
    print,
    printFancy,
};