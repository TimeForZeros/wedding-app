const express = require('express');
const userController = require('../api/controllers/users');

const router = express.Router();

/* GET users listing. */
router.get('/guest', userController.get);
router.post('/guest/add', userController.create);

module.exports = router;
