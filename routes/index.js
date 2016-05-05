var express = require('express');
var quiz_controller=require('../controllers/quiz_controller.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Author' });
});

router.get('/question', quiz_controller.question);

router.get('/check', quiz_controller.check);

module.exports = router;
