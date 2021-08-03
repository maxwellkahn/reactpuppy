const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puppySchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Puppy', puppySchema);