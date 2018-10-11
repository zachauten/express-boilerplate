var express = require('express');
var router = express.Router();
var { usersController } = require('../controllers/usersController');

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;
