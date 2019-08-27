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

module.exports = (db) => {

  router.post("/", (req, res) => {
    //add a new user to the database when the registration form is submitted
    //create new user object, assigning properties from the request body, password is hashed using bcrypt
    let newUser = {
      user_name: req.body.user_name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar_URL: req.body.avatar_URL  ? req.body.avatar_URL : "midterm_resource_wall/images/icons8-user-80.png",
      date_join: new Date()
    }
    //insert new user object in to users table
    db.query('users')
      .insert(newUser)
      .returning(['id', 'user_name', 'avatar_URL'])
      .then( (results) => {
        console.log(newUser);
        req.session.user = results[0];
        res.status(200).send(results[0]);
      })
      .catch((err) => {
        if(/already exists/.test(err.detail)) {
          console.error(err);
          res.status(500).send("User already exists.");
        } else {
          console.error(err);
          res.status(500).send("Something wrong happened, please try again.");
        }
      })
  });


  router.get("/", (req, res) => {
    // db.query(`SELECT * FROM users;`)
    //   .then(data => {
    //     const users = data.rows;
    //     res.json({ users });
    //   })
    //   .catch(err => {
    //     res
    //       .status(500)
    //       .json({ error: err.message });
    //   });
    console.log('Time:', Date.now());
    res.render("views/index.ejs");
  });


  router.get("/login", (req, res) => {

    db.query(`SELECT * FROM users;`)
    .then((results) => {
      res.json(results);
    });
  });
  return router;
};



