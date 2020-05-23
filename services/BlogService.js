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

