const currencies = require('../db/curencies');
const joi = require("joi");

const currencySchema = joi.object({
  name: joi.string().required(),
  code: joi.string().required(),
}).unknown().required();

async function getCurrencies (req, res){
  const result = await currencies.list();
  res.status(200).send(result);
}

async function convertCurrencies (req, res) {
  let {from, to, amount} = req.query

  if (!from || !to || !amount) {
    return res.status(404).send({message: 'No data'});
  }

  amount = Number(amount);

  if (typeof from !== "string" || typeof to !== "string" ||
      typeof amount !== 'number') {
    return res.status(400).send({message: 'Invalid data type!'});
  }
  const changeRate = {
    from: 'EUR',
    to: 'HUF',
    rate: 330
  };

  return res.status(200).send(amount * changeRate);
}

async function createCurrency(req, res) {
  try {
    joi.attempt(req.body, currencySchema);
  } catch (err) {
    res.status(400);
    res.send(err.details[0].message);
  }

  const result = await currencies.createCurrency(req.body);

  if (result.error) {
    return res.status(400).send(result.error);
  }

  res.status(201).send(result);
}

module.exports = {
  createCurrency,
  getCurrencies,
  convertCurrencies
};