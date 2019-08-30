/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
"use strict";

const express = require('express');
const router  = express.Router();
const dbParams = require('../lib/db.js');

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

  router.get('/search', (req, res) => {
    res.render('search');
  })

  router.get('/addresource', (req, res) => {
    res.render('addresource');
  });


  router.get('/myresources', (req, res) => {
    res.render('myresources');
  });

  router.get('/updateprofile', (req, res) => {
    res.render('updateprofile')
    .then(() => {
      res.redirect('/myresources');
    })
  });

  router.get('/register', (req, res) => {
    res.render('register');
  });


  router.get('/login', (req, res) => {
    res.render('login')
    .then(() => {
      res.redirect('/myresources');
    })
  });


  router.get('/logout', (req, res) => {
    res.redirect('/');
  })


  router.post('/register', (req, res) => {
    dbParams.addNewUser(db, req.body)
    .then(() => {
      res.redirect('/myresources');
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    });
  });


  // get details for each resource
  router.get('/:id', (req, res) => {
    console.log('params -', req.params.id);
    if (req.params.id) {
      dbParams.getResourceById(db, req.params.id)
      .then(resources => {
        res.render('resource', { resources })
      })
      .catch(err => {
        console.error(err);
        res.send(err);
      });
    }
  });

  //this route should be updated
  router.post('/login', (req, res) => {
    // posting login
    if (req.body.email) {
      dbParams.getUsers(db, req.body.email)
      .then(users => {
        res.render('myresources', { users })
      })
      .catch(err => {
        console.error(err);
        res.send(err);
      });
    }
  });

  router.get('/search', (req, res) => {
    res.render('search');
  });

  // search for resources from given strings, should accept this
  router.post('/search', (req, res) => {
    if (req.body.category_str || req.body.title_str) {
      dbParams.searchRes(db, req.body.category_str, req.body.title_str)
      .then(resources => {
        res.render('index', { resources })
      })
      .catch(err => {
        console.error(err);
        res.send(err);
      });
    }
  });

  router.get('/:user_id', (req, res) => {

  })

  return router;
};

