var express = require('express')
var router = express.Router()
const BlogController = require('../controllers/BlogController')
//const validateData = require('../helpers/validateData')
//const { isAdmin, isUser } = require('../helpers/permission')



// GET

router.get('/blog', BlogController.index)
router.get('/blog/new', BlogController.new)


// POST

router.post('/blog/coment', BlogController.storeComent)




module.exports = router