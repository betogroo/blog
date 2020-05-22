module.exports = {
    isAdmin: function (req, res, next) {
        //var url = req.url
        if (req.isAuthenticated() && req.user.idRole > 99) {
            return next()
        } else {

            req.flash("error", "Acesso restrito. Apenas Administradores têm acesso")
            res.redirect("/")
        }

    },
    isMod: function (req, res, next) {
        //var url = req.url
        if (req.isAuthenticated() && req.user.idRole > 49) {
            return next()
        } else {

            req.flash("error", "Acesso restrito. Apenas Administradores e Moderadores têm acesso")
            res.redirect("/")
        }

    },

    isUser: function (req, res, next) {

        if (req.isAuthenticated() && req.user.idRole > 9) {
            return next()
        } else {
            req.flash("error", "Você deve estar logado para acessar aqui")
            res.redirect("/")
        }

    }

}