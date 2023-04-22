const currencies = require('../db/curencies');
const joi = require("joi");

const currencySchema = joi.object({
  id: joi.string().required(),
  from: joi.string().required(),
  to: joi.string().required(),
  rate: joi.number().required()
}).unknown().required();

async function getCurrencies (req, res){
  const result = await currencies.list();
  res.status(200).send(result);
}

async function convertCurrencies (req, res) {
  let {from, to, amount} = req.query
  if (!from || !to || !amount) {
    return res.status(404).send({ message: 'No data' });
  }
  amount = Number(amount);
  if (typeof from !== "string" || typeof to !== "string" ||
      typeof amount !== 'number') {
    return res.status(400).send({message: 'Invalid data type!'});
  }

  const id = `${from};${to}`;
  const currency = await currencies.getCurrency(id);

  if (currency.error) {
    return res.status(404).send({message: 'Currency not found'});
  }

  console.log( 'CICA', typeof amount, typeof currency.rate, amount / currency.rate);

  return res.status(200).send(`${amount / currency.rate}`);
}

async function createCurrency(req, res) {
  try {
    joi.attempt(req.body, currencySchema);
  } catch (err) {
    res.status(400);
    res.send(err.details[0].message);
    return;
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