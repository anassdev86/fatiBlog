const express = require('express');
const blogController = require('./../controllers/blogController');

const router = express.Router();

router.get('/', blogController.getAllBlog);
router.post('/createblog', blogController.createBlog);

module.exports = router;