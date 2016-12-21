var express = require('express');
var router = express.Router();
function ensureAuthenticated(req, res, next) {
  if(req.isAuthenticated()) return next();
  return res.redirect('/user/login');
}
router.get('/', ensureAuthenticated, function(req, res) {
  res.render('order', {user: req.user});
});

module.exports = router;
