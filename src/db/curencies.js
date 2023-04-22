const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

const collectionName = 'currencies';

async function list (){
  const currencies = await getDb().collection(collectionName).find().toArray();
  return currencies.map(c => c.code);
}

async function createCurrency(currency) {
  const db = getDb();
  console.log(currency)
  const exists = await db.collection(collectionName).findOne({code: currency.code});
  if (exists) {
    return {error: 'Currency already exists'};
  }
  const result = await db.collection(collectionName).insertOne(currency);
  return result;
}

module.exports = {
  createCurrency,
  list
};