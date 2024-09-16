const Blog = require('./../models/blogModel');


exports.getAllBlog = async (req, res, next) => {
    try{
        const data = await Blog.find();
        res.status(200).json({
            status: "success",
            data: {
                data
            }
        })

    }catch(err){
        res.status(401).json({
            status: 'FAIL',
            message: err.message
        })
    }
};

exports.createBlog = async (req, res, next) => {
    try{
      const blog = await Blog.create(req.body);
      res.status(200).json({
        status: "success",
        data: blog
      })

    }catch(err){console.log(err)}
}