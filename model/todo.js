// Import todo database
const pool = require('./database');

// Insert description into the todo table
const create = (description) => {
  const directive = 'INSERT INTO todo (description) VALUES ($1) RETURNING *';
  const values = [ description ];
  pool.query(directive, values);
};

// Get all tasks from the todo table
const get = () => {
  const directive = 'SELECT * FROM todo';
  pool.query(directive);
};

// Remove todo by id from todo table
const remove = (id) => {
  const directive = 'DELETE FROM todo WHERE todo_id = $1';
  const values = [ id ];
  pool.query(directive, values);
};

module.exports = {
  create,
  get,
  remove
};
