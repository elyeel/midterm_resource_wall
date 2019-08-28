
"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users`)
    .then((results) => {
      res.json(results);
    });
  });

  return router;
}

