var express = require('express');
var router = express.Router();
var Order = require('../models/order.model');

function ensureAuthenticated(req, res, next) {
  if(req.isAuthenticated()) return next();
  return res.redirect('/user/login');
}
router.get('/', ensureAuthenticated, function(req, res) {
  res.render('order', {user: req.user});
});
router.get('/:order', ensureAuthenticated, function(req, res) {
  Order.findOne({_id: req.params.order, customer: req.user._id})
  .populate('customer')
  .exec(function(err, order) {
    if(err) throw err;
    if(order) res.render('ordered', {order:order});
    else res.redirect('/');
  })
})
router.post('/submit', ensureAuthenticated, function(req, res) {
    var form = req.body;
    var user = req.user;
    //sobreescribimos el enviado para evitar que nos toquen nada en el front-end
    form.customer = user;

    if(form.customer && form.pizza) {
      Order.create(form, function(err, created) {

          return res.redirect('/order/' + created._id);
      });

    } else {
      return res.redirect('/order');
    }


});

module.exports = router;
