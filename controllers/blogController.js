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
       console.log(req.body)
      const blog = await Blog.create({
        title: req.body.title,
        text: req.body.text[0],
        description: req.body.description,
        image: req.file.photo_url
      });

      res.status(200).json({
      status: "success",
      data: blog
       })

    

    }catch(err){console.log(err)}
}

exports.deleteBlog = async (req, res, next) => {
    try{
      await Blog.findByIdAndDelete({_id: req.params.id});

      res.status(200).json({
      status: "success",
      data: null
       })

    

    }catch(err){console.log(err)}
}