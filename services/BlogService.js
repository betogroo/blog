const db = require('../models/')
const { Op } = require("sequelize")




class BlogService {

    constructor() {

        //this.Blog = db['Blog']
    }

    getAll() {
        var posts = [
            {
                id: 1,
                author: "Luiz Humberto",
                title: "Teste",
                message: "Vestibulum faucibus odio nullam aliquam proin platea purus porttitor curabitur, lobortis vestibulum non tellus lobortis porttitor quisque per, ornare integer dui malesuada ut vehicula in himenaeos. donec felis suscipit netus dictum rhoncus suspendisse arcu phasellus himenaeos mattis faucibus at, volutpat cubilia auctor rhoncus rutrum sagittis non pretium neque euismod sociosqu, a sem tortor malesuada lacinia nulla taciti et libero quisque odio. quisque velit per lectus donec luctus fames quisque curabitur laoreet, aliquam consectetur porta duis sit integer sociosqu aliquam dui ultricies, dui malesuada elementum facilisis quisque arcu nisi velit. phasellus ultrices facilisis fusce rutrum imperdiet vitae, faucibus imperdiet orci nisl. ",
                response:
                    [
                        {
                            author: "Viviane",
                            message: "Legal Beto, gostei muito"
                        }, {
                            author: "Cesar",
                            message: "Da hora"
                        }
                    ]
            },
            {
                id: 2,
                author: "Viviane",
                title: "Outro Teste",
                message: "Donec nullam interdum hac erat tellus platea mauris, curabitur consequat leo erat mollis. suspendisse mattis posuere mauris nulla fames, sodales taciti laoreet suspendisse laoreet sociosqu, ut praesent rutrum rhoncus. at litora laoreet facilisis euismod suscipit nulla urna feugiat nulla egestas, convallis sollicitudin nibh aliquam etiam commodo curabitur justo condimentum fames, dictumst fringilla curabitur in vel ante primis quam accumsan. condimentum vestibulum adipiscing cursus gravida eleifend condimentum neque eu consequat, tincidunt gravida aptent vivamus orci nisl rutrum mi nisi, libero blandit aliquam ultrices posuere felis metus commodo. convallis aliquam congue vestibulum ut dui, himenaeos orci posuere euismod, taciti non aliquam molestie.  ",
                response:
                    [
                        {
                            author: "Beto",
                            message: "Legal Viane, gostei muito disse"
                        }, {
                            author: "Cesar",
                            message: "Da hora"
                        }
                    ]
            },
            {
                id: 3,
                author: "Cesar",
                title: "Mais um teste",
                message: "Dictumst venenatis erat rutrum porta purus dictumst iaculis lacinia tellus, rutrum nisi habitasse hac commodo porta habitant dapibus aliquet eros, suscipit sem fermentum eu ornare vehicula sit elit. lacinia sagittis odio curae fringilla sollicitudin litora, posuere velit fusce diam quisque. ",
                response:
                    [
                        {
                            author: "Viviane",
                            message: "Legal Cesar, gostei muito deste post"
                        }, {
                            author: "Beto",
                            message: "Muito doido mano"
                        }
                    ]
            }
        ]
        return posts
    }



}
module.exports = new BlogService

