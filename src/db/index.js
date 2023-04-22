const { MongoClient } = require('mongodb');
const { dbURI } = require('../config');

let mongoClient;
async function connect () {
  mongoClient = await MongoClient.connect(dbURI);
}

function getDb() {
  return mongoClient.db(mongoClient.s.options.db);
}

module.exports = { connect, getDb }