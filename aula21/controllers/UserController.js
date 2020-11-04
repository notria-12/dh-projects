const users = require("../data/users")
const utils = require("../utils/saveData");

const bcrypt = require("bcrypt");

module.exports = {
    create(req, res, next){
        res.render('create-user');
    },
    save(req, res, next){
        let id = users.length +1;

        req.body.password = bcrypt.hashSync(req.body.password, 10)

        let user = {id, ...req.body};

        users.push(user);

        utils.saveData(users, "users.js")


        res.render('create-user',{added: true} );
    },
    login(req, res, next){
        res.render('login');
    },
}