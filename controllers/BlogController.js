const BlogService = require('../services/BlogService')
const moment = require('moment')


class BlogController {

  //GET    
  async index(req, res) {

    var posts = await BlogService.getAll()
    res.render("blog/index.ejs", { posts, moment })
    res.json(posts)

  }

  new(req, res) {
    res.render("blog/new.ejs");
  }

  async storeComent(req, res) {
    var { idUser, idPost, message } = req.body
    var data = { idUser, idPost, message }
    var coment = await BlogService.storeComent(data)
    res.json({ data, coment })
  }



}

module.exports = new BlogController