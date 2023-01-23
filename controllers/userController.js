const DB = require('../models');
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB
        .User
        .findAll()
        .then(users => {
         return res.json(users)
        })
    }
}