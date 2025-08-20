/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql:///lunchly_db");

db.connect();

module.exports = db;
