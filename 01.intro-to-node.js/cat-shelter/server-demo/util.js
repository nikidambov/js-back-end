function html(body, title = 'server') {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>${title}</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
        ${body}
    </body>
    </html>`
}

function addItem(name, color){
    const id = nextId();
    data[id] = {
        name,
        color
    };
}

function getItems() {
    return Object
    .entries(data)
    .map(([id, item]) => Object.assign({}, item, { id}));
}

function deleteItem(id) {
    delete data[id];
}

function nextId() {
    return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
}

const data = {
    'w21s1s1s': {
        name: 'Product 1',
        color: 'red',
    },
    'e123sf6d': {
        name: 'Product 2',
        color: 'green'
    }
};

module.exports = {
    html,
    addItem,
    getItems,
    deleteItem,
};