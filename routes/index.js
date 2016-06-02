var express = require('express');
var quizcontroller=require('../controllers/quiz_controller.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res, next) {
  res.render('author', { title: 'Author' });
});

router.get('/question', quizcontroller.question);

router.get('/check', quizcontroller.check);

//definicion /quizzes
router.get('/quizzes',quizController.index);
router.get('/quizzes/:quizId(\\d+)',quizController.show);
router.get('/quizzes/:quizId(\\d+)/check',quizController.check);

module.exports = router;
