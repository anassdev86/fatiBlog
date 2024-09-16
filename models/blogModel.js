const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please the Post shold have a title"]
    },
    date: {
        type: Date,
        default: Date.now()
    },
    image: String
});

const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;
