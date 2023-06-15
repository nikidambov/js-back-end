const mongoose = require('mongoose');

const Cat = require('./models/Cat');
const Person = require('./models/Person');

async function connectDb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/firstDB');
    console.log('Db Connected successfully');
  
    // cats.forEach(cat => cat.greet()); // Instance method
    // cats.forEach(cat => console.log(cat.info)); // Virtual property
    // const result = await Cat.giveMeCats(); //Static model method


    // Read
    // const cats = await Cat.find();
    // const cats = await Cat.findOne();
    // const cats = await Cat.findById('');


    // Create method 1
    /*
    const newCat = new Cat({
        name: 'Zuza',
        age: 10,
        breed: 'Ulichna',
    });

    await newCat.save();
    */

    // Create method 2
    /*
    const newCat = await Cat.create({
        name: 'Charli',
        age: 10,
        breed: 'Kuche',
    });
    */

    // Update method 1
    // const charli = await Cat.findOne({name: 'Charli'});
    // charli.age = 7;
    // await charli.save();

    // Update method 2 native mongoDB
    // await Cat.updateOne({ name: 'Charli' }, { $set: { age: 9 }} );

    // Update method 3 the mongoose extension
    //await Cat.findByIdAndUpdate('648b43ca7d2d0799a1074e96', {$set: {breed: 'Chihuahua'}});

    // Delete method 1
    // await Cat.deleteOne({name: 'Delete'});

    // Delete method 2
    //await Cat.findByIdAndDelete('648b47dc8414848a114f9f62');

    // Creatinf collection
    /*
    await Person.create({
        name: 'Pesho',
        age: 20,
    });
    */

    // Find all non chihuahua cats
    // const cats = await Cat.find({breed: {$ne: 'Chihuahua'}});
    // mongoose query
    // const cats = await Cat.find().where('breed').ne('Chihuahua');
    // console.log(cats);

    /*
    const newCat = await Cat.create({
        name: 'Pencho',
        age: 22,
        breed: 'jiraf',
        color: 'white',
    });
    */

}

connectDb();