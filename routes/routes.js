/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
"use strict";

const express = require('express');
const router  = express.Router();
const moment = require('moment');
const path = require('path');

module.exports = (db) => {


router.get("/", (req, res) => {
  console.log('Time:', Date.now());
  res.render("./views/index.ejs");
})
};


// router.get("/login", (req, res) => {
//   db.query(`SELECT * FROM users;`)
//   .then((results) => {
//     res.json(results);
//   });
// });
// return router;
// };

