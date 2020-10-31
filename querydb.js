// disabled db.js
const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "midterm",
});

const getAllResource = function () {
  return pool
    .query(
      `
  SELECT * FROM resources;`
    )
    .then((res) => {
      console.log(res);
      if (res) {
        return res.rows;
      } else {
        console.log("ERROR in getting all data from resources");
        return null;
      }
    })
    .catch((err) => console.error("query error", err.stack));
};
exports.getAllResource = getAllResource;
