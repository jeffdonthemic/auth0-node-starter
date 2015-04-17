var express = require('express');
var router = express.Router();
var passport = require('passport');
var requiresLogin = require('../requiresLogin');

router.get('/', function(req, res) {
  res.render('index', { title: 'Auth0 Starter' });
});

router.get('/login', function(req, res) {
  res.render('login', {
    domain: process.env['AUTH0_DOMAIN'],
    clientId: process.env['AUTH0_CLIENT_ID'],
    callbackUrl: process.env['AUTH0_CALLBACK_URL'] || 'http://localhost:8000/callback',
    scope: process.env['AUTH0_SCOPE'] || 'openid'
  });
});

// Auth0 callback handler
router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/failure' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/success");
  });

router.get('/failure', function(req, res) {
  res.render('failure');
});

router.get('/success', function(req, res) {
  res.render('success');
});

router.get('/user', requiresLogin, function(req, res) {
  console.log(req.user);
  res.render('user', { user: req.user });
});

module.exports = router;
