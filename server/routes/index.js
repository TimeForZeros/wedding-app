const express = require('express');
const guestListController = require('../api/controllers/guestLists');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('hello');
});

// Guest List
router.get('/list', guestListController.get);
router.post('/list/create', guestListController.create);
router.delete('/list/deleteOne/:id', guestListController.deleteOne);
router.delete('./list/deleteAll', guestListController.deleteAll);

module.exports = router;
