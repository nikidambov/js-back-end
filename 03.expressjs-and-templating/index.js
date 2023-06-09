const express = require('express');
const path = require('path');
const app = express();

// Add third party middleware
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);

app.use(express.static('public'));

// Add middlewares
app.use((req, res, next) => {
    console.log('Middleware1');
    next();
});

app.use((req, res, next) => {
    console.log(`HTTP Request ${req.method}: ${req.path}`);
    next();
});

// Partial route middleware
app.use('/cats', (req, res, next) => {
    console.log('Cats middleware');
    next();
});

// Route specific middleware
const specificMiddleware = (req, res, next) => {
    console.log('Specific middleware only for this route');
    next();
};

app.get('/specific', specificMiddleware, (req, res) => {
    res.send('Some specific route with middleware');
});

/*
app.get('/specific', (req, res, next) => {
    console.log('Specific middleware only for this route');
    next();
}, (req, res) => {
    res.send('Some specific route with middleware');
});

*/

// Express router / Actions
app.get('/', (req, res) => {
    res.status(200).send('Hello from Express!');
});

// Don't do this at home!
//app.get('/css/style.css', (req, res) => {
//    res.sendFile(path.resolve(__dirname, 'public/css/style.css'));
//});

app.get('/cats', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <form method="POST">
        <label for="name">Name</label>
        <input type="text" id="name" name="name">
        <label for="age">Age</label>
        <input type="number" id="age">
        <input type="submit" value="create">
    </form>
</body>
</html>
    `);
});

app.post('/cats', (req, res) => {
    console.log(req.body);
    res.status(201).send('Cat has been created!');
});

app.get('/cats/:catId', (req, res) => {
    const catId = Number(req.params.catId);
    if (!catId) {
        return res.status(404).send('Cannot find a cat');
    }

    console.log(req.params);
    res.send(`Request with parameter - ${req.params.catId}`);
});

app.get('/download', (req, res) => {
    res.download('./manual.pdf');
    //res.sendFile(path.resolve(__dirname, 'manual.pdf'));
    //res.attachment('./manual.pdf');
    //attachment needs -> res.end();
});

app.get('/old-route', (req, res) => {
    res.redirect('/cats');
});

app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

// End of express router

app.listen(5000, () => console.log('Server is listeting on port 5000...'));
