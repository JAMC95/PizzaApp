var express = require('express');
var router = express.Router();
var Order = require('../models/order.model');

function ensureAuthenticated(req, res, next) {
  if(req.isAuthenticated()) return next();
  return res.redirect('/user/login');
}

router.get('/', ensureAuthenticated, function(req, res) {
  Order.find({})
  .populate('customer')
  .exec(function(err, orders) {
    if(err) throw err;
    res.render('admin', {orders: orders});
  });

});
module.exports = router;
