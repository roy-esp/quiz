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

router.get('/question', function(req, res, next) {
  res.render('quizzes/question', { question: 'Capital de Italia' });
});

router.get('/check', function(req, res, next) {
  var result=req.query.answer=== 'Roma' ? 'Correcta' : 'Incorrecta';
  res.render('quizzes/result', { result: result });
});

module.exports = router;
