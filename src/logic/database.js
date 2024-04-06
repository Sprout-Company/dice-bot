
const { MONGO_URI, MONGO_DB } = require('../../config.js');
const { MongoClient } = require('mongodb');

let db;

// connect to database
const connectDb = async () => {
  const client = await MongoClient.connect(MONGO_URI, {useUnifiedTopology: true });
  db = client.db(MONGO_DB); 
  
  return db;
}

// disconnect to database
const disconnectDb = async () => {
  await client.close();
}

// get database instance
const getDb = () => { 
  return db;
}

module.exports = {
  connectDb,
  disconnectDb,
  getDb,
};