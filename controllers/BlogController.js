

class BlogController {

  //GET    
  index(req, res) {
    var posts = [
      {
        id: 1,
        author: "Luiz Humberto",
        title: "Teste",
        message: "Vestibulum faucibus odio nullam aliquam proin platea purus porttitor curabitur, lobortis vestibulum non tellus lobortis porttitor quisque per, ornare integer dui malesuada ut vehicula in himenaeos. donec felis suscipit netus dictum rhoncus suspendisse arcu phasellus himenaeos mattis faucibus at, volutpat cubilia auctor rhoncus rutrum sagittis non pretium neque euismod sociosqu, a sem tortor malesuada lacinia nulla taciti et libero quisque odio. quisque velit per lectus donec luctus fames quisque curabitur laoreet, aliquam consectetur porta duis sit integer sociosqu aliquam dui ultricies, dui malesuada elementum facilisis quisque arcu nisi velit. phasellus ultrices facilisis fusce rutrum imperdiet vitae, faucibus imperdiet orci nisl. "
      },
      {
        id: 2,
        author: "Viviane",
        title: "Outro Teste",
        message: "Donec nullam interdum hac erat tellus platea mauris, curabitur consequat leo erat mollis. suspendisse mattis posuere mauris nulla fames, sodales taciti laoreet suspendisse laoreet sociosqu, ut praesent rutrum rhoncus. at litora laoreet facilisis euismod suscipit nulla urna feugiat nulla egestas, convallis sollicitudin nibh aliquam etiam commodo curabitur justo condimentum fames, dictumst fringilla curabitur in vel ante primis quam accumsan. condimentum vestibulum adipiscing cursus gravida eleifend condimentum neque eu consequat, tincidunt gravida aptent vivamus orci nisl rutrum mi nisi, libero blandit aliquam ultrices posuere felis metus commodo. convallis aliquam congue vestibulum ut dui, himenaeos orci posuere euismod, taciti non aliquam molestie.  "
      }
    ]
    res.render("blog/index.ejs", { posts })
    //res.json(posts)

  }

  new(req, res) {
    res.render("blog/new.ejs");
  }



}

module.exports = new BlogController