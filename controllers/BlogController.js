const BlogService = require('../services/BlogService')


class BlogController {

  //GET    
  index(req, res) {

    var posts = BlogService.getAll()
    res.render("blog/index.ejs", { posts })
    //res.json(posts)

  }

  new(req, res) {
    res.render("blog/new.ejs");
  }



}

module.exports = new BlogController