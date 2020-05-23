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

  async storePost(req, res) {
    var { idUser, title, message } = req.body
    var data = { idUser, title, message }

    var post = await BlogService.storePost(data)
    res.json({ data, post })
  }



}

module.exports = new BlogController