const http = require("http");
const homeTemplate = require("./views/home/index");
const siteCss = require("./content/styles/site");
const addBreedTemplate = require("./views/addBreed");
const catTemplate = require('./views/home/catTemplate');
PORT = 3000;

const cats = [
    {
        imageUrl: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        name: 'Tsunami',
        breed: 'Angora',
        description: 'Smart Cat',
    },
    {
        imageUrl: 'https://static.nationalgeographic.co.uk/files/styles/image_3200/public/01-cat-names-nationalgeographic_1525054.jpg?w=1900&h=1267',
        name: 'Pesho',
        breed: 'Ulichna',
        description: 'Beautiful Cat',
    },
    {
        imageUrl: 'https://i.natgeofe.com/n/964c9c1c-c745-450b-8e4a-15ce337e05af/NationalGeographic_1468861_square.jpg',
        name: 'Dancho',
        breed: 'Angora',
        description: 'Cute Cat',
    },
    {
        imageUrl: 'https://i.natgeofe.com/n/25103ddd-9e02-4d78-b55e-f1d4a85c2657/NationalGeographic_1926777_3x4.jpg',
        name: 'Mariika',
        breed: 'Persiyska',
        description: 'Dumb Cat',
    },
];

const server = http.createServer((req, res) => {
    const { url } = req;

    if (url === "/") {
        const imageUrlPattern = /{{imageUrl}}/g;
        const namePattern = /{{name}}/g;
        const breedPattern = /{{breed}}/g;
        const descriptionPattern = /{{description}}/g;

        const catHtml = cats.map((cat) => catTemplate
        .replace(imageUrlPattern, cat.imageUrl)
        .replace(namePattern, cat.name)
        .replace(breedPattern, cat.breed)
        .replace(descriptionPattern, cat.description)
        );

        const catsTemp = homeTemplate.replace("{{cats}}", catHtml);
        
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(catsTemp);
    } else if (url === "/content/styles/site.css") {
        res.writeHead(200, {
            "Content-Type": "text/css"
        })
        res.write(siteCss);
    } else if (url === "/cats/add-breed") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(addBreedTemplate);
    }

    res.end();
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));