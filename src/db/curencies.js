const { ObjectId } = require('mongodb');
const { getDb } = require('../db');

const collectionName = 'currencies';

async function list (){
  const currencies = await getDb().collection(collectionName).find().toArray();
  const currency_arr = [...currencies.map(c => c.from), ...currencies.map(c => c.to)];
  return [...new Set(currency_arr)];
}

async function getCurrency(id){
  const resut = await getDb().collection(collectionName).findOne({id: id});
  if (!resut) {
    return {error: 'Currency not found'};
  }

  return resut;
}

async function createCurrency(currency) {
  const db = getDb();

  const existRate = await db.collection(collectionName).findOne({id: currency.id});
  if (existRate) {
    return {error: 'Currency already exists', code: 'duplicate'};
  }

  const result = await db.collection(collectionName).insertOne(currency);
  return currency;
}

module.exports = {
  createCurrency,
  list,
  getCurrency
};