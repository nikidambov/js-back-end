const mongoose = require('mongoose');
const Cat = require('./models/Cat');

async function connectDb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/firstDB');
    console.log('Db Connected successfully');

    const cats = await Cat.find();
    
    // cats.forEach(cat => cat.greet()); // Instance method
    cats.forEach(cat => console.log(cat.info)); // Virtual property
    

    const result = await Cat.giveMeCats(); //Static model method
    console.log(result);
}

connectDb();