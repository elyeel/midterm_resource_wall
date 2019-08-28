
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


const getMyResources = function(db, user_id) {
  return db.query(`
  SELECT * FROM resources
  WHERE user_id = $1;`, [user_id])
  .then(res => {
    if (res) {
      return res.rows;
    } else {
      console.log('ERROR in getting all data from my resources');
      return null;
    }
  })
  .catch(err => console.error('query error', err.stack));
};
dbParams.getMyResources = getMyResources;


const search = function(db, category_str, title_str) {
  if (category_str) {
    return db.query(`
    SELECT * FROM resources
    WHERE category_id = $1;`, [category_str])
    .then(res => {
      if (res) {
        return res.rows;
      } else {
        console.log('ERROR in getting all data');
        return null;
      }
    })
  }
  if (title_str) {
    return db.query(`
    SELECT * FROM resources
    WHERE title ilike '%$1%';`, [title_str])
    .then(res => {
      if (res) {
        return res.rows;
      } else {
        console.log('ERROR in getting all data');
        return null;
      }
    })
  }
}


const getResourceById = function(db, id) {
  const numId = parseInt(id, 10);
  console.log('Going to resource by id route', numId, "id =", id);
  return db.query(`
  SELECT *
  FROM resources
  JOIN categories ON categories.id = category_id
  JOIN comments ON comments.id = resources.id
  JOIN ratings ON ratings.id = resources.id
  JOIN likes ON likes.id = resources.id
  JOIN users ON users.id = resources.user_id
  WHERE resources.id = $1;`, [numId])
  .then(res => {
    if (res) {
      return res.rows[0];
    } else {
      console.log('ERROR in getting all data from my resources');
      return null;
    }
  })
  .catch(err => console.error('query error', err.stack));
};
dbParams.getResourceById = getResourceById;

module.exports = dbParams;

