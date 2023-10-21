const mongoose = require("mongoose");

const electronicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [10, 'Name should be at least 10 characters.'],
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        minLength: [2, 'Type should be at least 2 characters.'],
    },
    damages: {
        type: String,
        required: [true, 'Damages is required'],
        minLength: [10, 'Damages should be at least 10 characters.'],
    },
    image: {
        type: String,
        required: [true, 'ImageURL is required'],
        match: [/^https?:\/\//, 'Invalid URL Address'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [10, 'Description should be between 10 and 200 characters.'],
        maxLength: [50, 'Description should be between 10 and 200 characters.'],
    },
    production: {
        type: Number,
        required: [true, 'Production is required'],
        min: [1900, 'Production should be between 1900 and 2023.'],
        max: [2023, 'Production should be between 1900 and 2023.'],
    },
    exploitation: {
        type: Number,
        required: [true, 'Exploitation is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});

const Electronic = mongoose.model('Electronic', electronicSchema);

module.exports = Electronic;
