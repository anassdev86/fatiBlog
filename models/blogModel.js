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
    text: {
        type: String,
        required: true,
    },
    description: {
       type: String,
       default: "fadi7a"
    },
    image: {
        type: String,
        required: [true, 'Post should be have a image']
    }
});

const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;
