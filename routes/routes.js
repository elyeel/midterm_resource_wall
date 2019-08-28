/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
"use strict";

const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const dbParams = require('../lib/db');

module.exports = (db) => {

  router.get('/', (req, res) => {
    //verification going here
    dbParams.getAllResources(db)
    .then(resources => {
      res.render('index', {resources})
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
  });

  router.get('/register', (req, res) => {
    res.render('register');
  });

  router.get('/login', (req, res) => {
    res.render('login');
  });

  router.post('/register', (req, res) => {
    // posting the registration
  });

  router.post('/login', (req, res) => {
    // posting login
    if (req.body.user_id) {

    }
  });

  router.get('/search', (req, res) => {
    res.render('search');
  })

  router.post('/search', (req, res) => {

  })

  router.get('/:user_id', (req, res) => {

  })

  return router;
};



