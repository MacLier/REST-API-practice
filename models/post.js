const mongoose = require('mongoose';
const Schrma = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creater: {
        type: Object,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema)