var express = require('express');
var router = express.Router();

const controller = require('../controllers/userController');

router.get('/', controller.list);
router.get('/search', controller.search);
router.get('/:id', controller.idUser);
router.post('/', controller.userCreate);
router.put('/:id', controller.editUser);
router.delete('/:id', controller.userDelete);



module.exports = router;
