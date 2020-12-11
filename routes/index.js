var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// -------- Add This
// 1. * GET Test. */
router.get('/api', function(req, res, next) {
  res.send({ message: 'Well Done' });
});

module.exports = router;
