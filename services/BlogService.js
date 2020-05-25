const db = require('../models/')
const { Op } = require("sequelize")




class BlogService {

    constructor() {

        this.Post = db['Post']
        this.User = db['User']
        this.Coment = db['Coment']
    }

    async getAll() {
        var post = await this.Post.findAndCountAll({
            include: [
                {
                    model: this.User,
                    attributes: ['id', 'name']
                },
                {
                    model: this.Coment,
                    include: [
                        {
                            model: this.User,
                            attributes: ['id', 'name']
                        }
                    ]
                }
            ]
        })
        return post
    }

    async getPost(slug){
        var post = await this.Post.findOne({
            where: {
                slug : slug
            },
            include: [
                {
                    model: this.User,
                    attributes: ['id', 'name']
                },
                {
                    model:this.Coment,
                    include: [
                        {
                            model: this.User,
                            attributes: ['id', 'name']
                        }
                    ]
                }
            ]
        })
        return post
    }



    async countComents(post){
        var idPost = post
        var nComents = await this.Coment.count({
            where: {
                idPost: idPost
            }
        })
        return nComents
    }

    async countSlug(slug){
        var nSlug = await this.Post.count({
            where: {
                slug: slug
            }
        })
        return nSlug
    }


    async storeComent(data) {
        var coment = await this.Coment.create(data)
        return coment
    }

    async storePost(data) {
        var post = await this.Post.create(data)
        return post
    }





}
module.exports = new BlogService

