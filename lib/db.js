
let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  };
}



const getAllResources = function(db) {
  return db.query(`
  SELECT * FROM resources;`)
  .then(res => {
    if (res) {
      console.log("Got the response");
      return res.rows;
    } else {
      console.log('ERROR in getting all data from resources');
      return null;
    }
  })
  .catch(err => console.error('query error', err.stack));
};
dbParams.getAllResources = getAllResources;

const getMyResources = function(db) {
  return db.query(`
  SELECT * FROM resources
  WHERE user_id = $1`, )
}

module.exports = dbParams;
