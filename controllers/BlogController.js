const BlogService = require('../services/BlogService')
const moment = require('moment')
const slugify = require('slugify')


class BlogController {

  //GET    
  async index(req, res) {

    var posts = await BlogService.getAll()
    res.render('blog/index.ejs', { posts, moment })
    res.json(posts)

  }

  new(req, res) {
    res.render('blog/new.ejs');
  }

  async view(req, res){

    var {slug} = req.params
    var post = await BlogService.getPost(slug)
    var nComents = await BlogService.countComents(post.id)
    res.render('blog/view.ejs', {post, nComents, moment})
    //res.json({post, nComents})
  }



  // POST

  async storeComent(req, res) {
    var { idUser, idPost, message } = req.body
    var data = { idUser, idPost, message }
    var coment = await BlogService.storeComent(data)
    res.json({ data, coment })
  }

  async storePost(req, res) {
    var { idUser, title, message, allowComment } = req.body
    var data = { idUser, title, message, allowComment }
    var slug = slugify(title, {lower:true, replacement: '-'})
    var nSlug = await BlogService.countSlug(slug)

    if (nSlug > 0) {
      data.slug = `${slug}-${nSlug}`
    } else {
      data.slug = slug
    }


    var post = await BlogService.storePost(data)
    res.json({ data,  post})
  }



}

module.exports = new BlogController