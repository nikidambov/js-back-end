const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least two charactes!'],
    },
    image: {
        type: String,
        required: [true, 'ImageUrl is required!'],
        match: [/^https?:\/\//, 'Invalid url'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'Age should be at least 1 and no longer than 100 characters!'],
        max: [100, 'Age should be at least 1 and no longer than 100 characters!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Description shold be at least 5 and no longer than 50 charactes!'],
        maxLength: [50, 'Description shold be at least 5 and no longer than 50 charactes!'],
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [5, 'Location shold be at least 5 and no longer than 50 charactes!'],
        maxLength: [50, 'Location shold be at least 5 and no longer than 50 charactes!'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    comments: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: 'User',
            },
            message: {
                type: String,
                required: [true, 'Comment message is required!'],
            },
        }
    ]
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;