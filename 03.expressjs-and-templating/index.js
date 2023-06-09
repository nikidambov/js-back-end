const express = require('express');
const path = require('path');
const app = express();


// Express router / Actions
app.get('/', (req, res) => {
    res.status(200).send('Hello from Express!');
});

app.get('/cats', (req, res) => {
    res.send('This page contains cats :)');
});

app.post('/cats', (req, res) => {
    res.status(201).send('Cat has been created!');
});

app.get('/cats/:catId', (req, res) => {
    const catId = Number(req.params.catId);
    if(!catId) {
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
