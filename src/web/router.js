const { Router } = require('express');
const { createCurrency, getCurrencies, convertCurrencies } = require('../handlers/currencyHandler');

const router = Router();

router.get('/', (req, res) => {
  res.send({
    message: 'OK',
  });
});

router.get('/symbols', getCurrencies);

router.get('/convert', convertCurrencies);

router.post('/change-rate', createCurrency);

module.exports = router;