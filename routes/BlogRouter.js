var express = require('express')
var router = express.Router()
const BlogController = require('../controllers/BlogController')
//const validateData = require('../helpers/validateData')
const { isAdmin, isUser } = require('../helpers/permission')



// GET

router.get('/blog', isUser, BlogController.index)
router.get('/blog/new', isAdmin, BlogController.new)
router.get('/blog/:slug', BlogController.view)


// POST

router.post('/blog/post', BlogController.storePost)
router.post('/blog/coment', BlogController.storeComent)




module.exports = router