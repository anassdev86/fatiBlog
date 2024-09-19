const express = require('express');
const blogController = require('./../controllers/blogController');
const upload = require('./../controllers/multerController');
const uploadToCloud = require('./../utils/cloudinary');

const router = express.Router();

router.get('/', blogController.getAllBlog);
router.post('/createblog',upload.single('photo'),uploadToCloud, blogController.createBlog);

router.delete('/:id', blogController.deleteBlog);


module.exports = router;