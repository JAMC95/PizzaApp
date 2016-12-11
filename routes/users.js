var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/login', function(req, res) {
  res.render('login');
});
router.post('/auth', function(req, res) {
  var post = req.body;
  res.redirect('/');
});
module.exports = router;
