const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    age: Number,
    breed: String,
});

//catSchema.method('greet', function() {});

// Instance method
catSchema.methods.greet = function() {
    console.log(`Hello im cat - my name is ${this.name}`);
};

// Virtual property 
catSchema.virtual('info').get(function () {
    return `My name is ${this.name} and Im ${this.age} years old`;
});

// Static model method
catSchema.static('giveMeCats', function() {
    return this.find();
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;