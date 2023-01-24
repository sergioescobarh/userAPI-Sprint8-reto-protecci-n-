const DB = require('../models');
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {
        DB
            .User
            .findAll()
            .then(users => {
                return res.status(200).json({
                    total: users.length,
                    data: users,
                    status: 200
                })
            })
    },
    idUser: (req, res) => {
        DB
            .User
            .findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200
                })
            })
    },
    userCreate: (req, res) => {
        DB
            .User
            .create(req.body)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200,
                    created: "ok"
                })
            })
    },
    userDelete: (req, res) => {
        DB
            .User
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(response => {
                return res.json(response)

            })
    },
    search: (req, res) => {
        DB
            .User
            .findAll({
                where: {
                    firtName: { [Op.like]: '%' + req.query.keyword + '%' }
                }
            })
            .then(users => {
                if (users.length > 0) {
                    return res.status(200).json(users);
                }
                return res.status(200).json('No existe el usuario');
            })
    },
    editUser: (req, res) => {
        DB.User.update({ ...req.body }, { where: { id: req.params.id } }).then(user => {
            res.json({
                data: user,
                status: 200
            })
        })
    }
}