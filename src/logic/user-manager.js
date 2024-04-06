
const { DB_FOLDER } = require('../../config.js');
const { getDb } = require('./database.js'); 
const { v1: uuidv1 } = require('uuid');

/**
 * User
 * @class
 */
function User (name, tg_id) {
  this.name = name;
  this.id = uuidv1();
  this.tg_id = tg_id;
  this.cash = 0;
  this.xp = 0;
}

// get db collection
const getUserColl = () => {
  return getDb().collection('users');
}

/** 
 * Get user data
 * @return {User | null}
 */
const getUser = async (query) => {
  return await getUserColl().findOne(query);
}

/**
 * Add a user into db
 */
const addUser = async (name, tg_id) => {
  if (await getUser({ tg_id })) return null;
  
  let user = new User(name, tg_id);
  await getUserColl().insertOne(user);
  
  // log
  console.log(user);
  log('s', 'Added a user');
  
  return user;
}

/**
 * Update a user
 */
const updateUser = async (query, updatedQuery) => {
  await getUserColl().updateOne(query, updatedQuery);
}

/**
 * Delete a user
 */
const deleteUser = async (query) => {
  await getUserColl().deleteOne(query);
}

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser,
}